import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from "@angular/platform-browser";
import { PortfolioTableComponent } from './portfolio-table.component';

describe('PortfolioTableComponent', () => {
  let component: PortfolioTableComponent;
  let fixture: ComponentFixture<PortfolioTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should get dropdown value as 'Brokerage' when clicked",() => {
    let dValue = fixture.debugElement.query(By.css('select')); 
      expect(dValue.nativeElement.textContent).toContain('Brokerage');
  })

  it("should fetch table when 'Brokerage is selected",() => {
    fixture.componentInstance.selectedValue = 'Brokerage';
    fixture.detectChanges();
    const table = fixture.nativeElement.querySelector('.table');
    expect(table).toBeTruthy();
  })
});
