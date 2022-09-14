import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let httpTestingController: HttpTestingController;
  var originalTimeout;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService],})
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DataService);
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
  });

  afterEach(() => {
    httpTestingController.verify();
    // jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("getBrokeragePortfolio() should return data", async() => {
    const dummyBrokerageData = [
      {
        "id": 4,
        "symbol": "GOOGL",
        "tradeDate": "07-09-22",
        "price": 100,
        "quantity": 5,
        "investedAmt": 500,
        "presentValue": 550,
        "PL": "50(10%)"
      }
    ]
    await service.getBrokeragePortfolio().subscribe((response) => {
      expect(response.length).toBe(1);
      expect(response).toEqual(dummyBrokerageData)
     
    });

  const httpRequest = httpTestingController.expectOne('../assets/brokerage-portfolio.json');
  expect(httpRequest.request.method).toBe('GET');
  httpRequest.flush(dummyBrokerageData);
  })


it("getTradeHistory() should return data", async() => {
  const dummyTradeHistoryData = [
    {
      "id": "5",
     "name": "Dominos",
     "acc": "savings",
     "dop": "07-09-2022",
     "dos": "-",
     "bs": "Buy",
     "asset": "XYZ",
     "bp": "199",
     "sp": "-",
     "quantity": "10"
    }
  ]
 await service.getTradeHistory().subscribe((response) => {
    expect(response.length).toBe(1);
    expect(response).toEqual(dummyTradeHistoryData)
    
  });
  const httpRequest = httpTestingController.expectOne('../assets/tradehistory.json');
  expect(httpRequest.request.method).toBe('GET');
  httpRequest.flush(dummyTradeHistoryData);
})
});

