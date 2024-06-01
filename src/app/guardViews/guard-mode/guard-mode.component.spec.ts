import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardModeComponent } from './guard-mode.component';

describe('GuardModeComponent', () => {
  let component: GuardModeComponent;
  let fixture: ComponentFixture<GuardModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuardModeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuardModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
