import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSectionHeaderComponent } from './portfolio-section-header.component';

describe('PortfolioSectionHeaderComponent', () => {
  let component: PortfolioSectionHeaderComponent;
  let fixture: ComponentFixture<PortfolioSectionHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioSectionHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioSectionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
