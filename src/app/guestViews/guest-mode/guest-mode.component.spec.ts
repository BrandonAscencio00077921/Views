import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestModeComponent } from './guest-mode.component';

describe('GuestModeComponent', () => {
  let component: GuestModeComponent;
  let fixture: ComponentFixture<GuestModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuestModeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuestModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
