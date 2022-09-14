import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DataService } from 'src/app/data.service';

import { PortfolioHeaderComponent } from './portfolio-header.component';

describe('PortfolioHeaderComponent', () => {
  let component: PortfolioHeaderComponent;
  let fixture: ComponentFixture<PortfolioHeaderComponent>;

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create card', () => {
    expect(fixture.nativeElement.querySelector('.card')).toBeTruthy();

  })
});
