import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicInterviewComponent } from './magic-interview.component';

describe('MagicInterviewComponent', () => {
  let component: MagicInterviewComponent;
  let fixture: ComponentFixture<MagicInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicInterviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagicInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
