import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorepadComponent } from './scorepad.component';

describe('ScorepadComponent', () => {
  let component: ScorepadComponent;
  let fixture: ComponentFixture<ScorepadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScorepadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorepadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
