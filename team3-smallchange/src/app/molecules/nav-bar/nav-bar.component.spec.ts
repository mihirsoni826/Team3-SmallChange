import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ NavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should have corret routerLink for Logo", () => {
    let a = compiled.querySelector("#logoLink");
    expect(a.getAttribute("routerLink")).toBe('/dashboard');
  });

  it("should have corret routerLink for Dashboard navlink", () => {
    let a = compiled.querySelector("#dashboardLink");
    expect(a.getAttribute("routerLink")).toBe('/dashboard');
  });

  it("should have corret routerLink for Portfolio navlink", () => {
    let a = compiled.querySelector("#portfolioLink");
    expect(a.getAttribute("routerLink")).toBe('/portfolio');
  });

  it("should have corret routerLink for Buy securities navlink", () => {
    let a = compiled.querySelector("#buyLink");
    expect(a.getAttribute("routerLink")).toBe('/buy');
  });

  it("should have corret routerLink for Sell securities navlink", () => {
    let a = compiled.querySelector("#sellLink");
    expect(a.getAttribute("routerLink")).toBe('/sell');
  });

  it("should have corret routerLink for Trade history navlink", () => {
    let a = compiled.querySelector("#historyLink");
    expect(a.getAttribute("routerLink")).toBe('/trade-history');
  });

  it("should call logout() when Logout link is clicked", () => {
    spyOn(component, 'logout');
    let a = compiled.querySelector("#logoutLink");
    a.click();
    expect(component.logout).toHaveBeenCalled();
  });


});
