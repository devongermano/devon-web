import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSectionFaqComponent } from './portfolio-section-faq.component';

describe('PortfolioSectionFaqComponent', () => {
  let component: PortfolioSectionFaqComponent;
  let fixture: ComponentFixture<PortfolioSectionFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioSectionFaqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioSectionFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
