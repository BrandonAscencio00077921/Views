import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InChargeAssignComponent } from './in-charge-assign.component';

describe('InChargeAssignComponent', () => {
  let component: InChargeAssignComponent;
  let fixture: ComponentFixture<InChargeAssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InChargeAssignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InChargeAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
