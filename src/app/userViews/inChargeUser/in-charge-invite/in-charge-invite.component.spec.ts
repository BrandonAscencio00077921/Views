import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InChargeInviteComponent } from './in-charge-invite.component';

describe('InChargeInviteComponent', () => {
  let component: InChargeInviteComponent;
  let fixture: ComponentFixture<InChargeInviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InChargeInviteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InChargeInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
