import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CardComponent } from 'src/app/atoms/card/card.component';
import { NavBarComponent } from 'src/app/molecules/nav-bar/nav-bar.component';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [
        DashboardComponent,
        NavBarComponent,
        CardComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should display the correct image in portfolio card", () => {
    expect(fixture.nativeElement.querySelector("#portfolioImg").src).toContain('/assets/pie-chart.png');
  });

  it("should display the correct image in buy securities card", () => {
    expect(fixture.nativeElement.querySelector("#buyImg").src).toContain('/assets/cart.png');
  });

  it("should display the correct image in sell securities card", () => {
    expect(fixture.nativeElement.querySelector("#sellImg").src).toContain('/assets/save-money.png');
  });

  it("should display the correct image in trade history card", () => {
    expect(fixture.nativeElement.querySelector("#historyImg").src).toContain('/assets/money-back-guarantee.png');
  });

  it("should have correct routerLink in the portfolio card", () => {
    let card = fixture.nativeElement.querySelectorAll("#portfolioCard");
    expect(card[0].attributes.routerLink.nodeValue).toBe('/portfolio');
  });

  it("should have correct routerLink in the buy securities card", () => {
    let card = fixture.nativeElement.querySelectorAll("#buyCard");
    expect(card[0].attributes.routerLink.nodeValue).toBe('/buy');
  });

  it("should have correct routerLink in the sell securities card", () => {
    let card = fixture.nativeElement.querySelectorAll("#sellCard");
    expect(card[0].attributes.routerLink.nodeValue).toBe('/sell');
  });

  it("should have correct routerLink in the trade history card", () => {
    let card = fixture.nativeElement.querySelectorAll("#historyCard");
    expect(card[0].attributes.routerLink.nodeValue).toBe('/trade-history');
  });
});
