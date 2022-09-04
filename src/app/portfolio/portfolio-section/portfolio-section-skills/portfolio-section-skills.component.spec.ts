import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSectionSkillsComponent } from './portfolio-section-skills.component';

describe('PortfolioSectionSkillsComponent', () => {
  let component: PortfolioSectionSkillsComponent;
  let fixture: ComponentFixture<PortfolioSectionSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioSectionSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioSectionSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
