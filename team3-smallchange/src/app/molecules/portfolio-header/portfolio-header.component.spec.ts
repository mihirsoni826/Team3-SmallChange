import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DataService } from 'src/app/data.service';

import { PortfolioHeaderComponent } from './portfolio-header.component';

fdescribe('PortfolioHeaderComponent', () => {
  let component: PortfolioHeaderComponent;
  let fixture: ComponentFixture<PortfolioHeaderComponent>;
  let dataService: DataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ PortfolioHeaderComponent ],
      providers: [DataService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    dataService = TestBed.get(DataService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create card', () => {
    expect(fixture.nativeElement.querySelector('.card')).toBeTruthy();
  })

  it('should render current value',async () =>{
    component.currentValue = 2800;
    let productSpy = spyOn(dataService, 'getBrokeragePortfolio').and.callThrough();

    component.ngOnInit();

    fixture.whenStable().then(() => {
    fixture.detectChanges();
    const value = fixture.nativeElement.querySelector('#currentVal');
    expect(value).toBeTruthy();
    expect(value.textContent).toContain('$2,800.00');
    });
  });

  it('should render invested value',async () =>{
    component.investedValue = 3000;
    let productSpy = spyOn(dataService, 'getBrokeragePortfolio').and.callThrough();

    component.ngOnInit();

    fixture.whenStable().then(() => {
    fixture.detectChanges();
    const value = fixture.nativeElement.querySelector('#investedVal');
    expect(value).toBeTruthy();
    expect(value.textContent).toContain('$3,000.00');
    });
  });
});
