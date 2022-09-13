import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController } from "@angular/common/http/testing";
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should send data when 'getBrokeragePortfolio' is called",async() => { 
    await service.getBrokeragePortfolio().subscribe((response) => {
      expect(response.length).toBe(6);
    });
  })
});
