import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InChargeUsersComponent } from './in-charge-users.component';

describe('InChargeUsersComponent', () => {
  let component: InChargeUsersComponent;
  let fixture: ComponentFixture<InChargeUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InChargeUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InChargeUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
