import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSectionExperienceComponent } from './portfolio-section-experience.component';

describe('PortfolioSectionExperienceComponent', () => {
  let component: PortfolioSectionExperienceComponent;
  let fixture: ComponentFixture<PortfolioSectionExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioSectionExperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioSectionExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
