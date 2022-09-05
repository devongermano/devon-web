import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H1Component } from './header.component';

describe('HeaderComponent', () => {
  let component: H1Component;
  let fixture: ComponentFixture<H1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ H1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(H1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
