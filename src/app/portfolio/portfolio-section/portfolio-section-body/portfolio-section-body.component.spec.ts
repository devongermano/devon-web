import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSectionBodyComponent } from './portfolio-section-body.component';

describe('PortfolioSectionBodyComponent', () => {
  let component: PortfolioSectionBodyComponent;
  let fixture: ComponentFixture<PortfolioSectionBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioSectionBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioSectionBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
