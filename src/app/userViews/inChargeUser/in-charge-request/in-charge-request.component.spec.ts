import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InChargeRequestComponent } from './in-charge-request.component';

describe('InChargeRequestComponent', () => {
  let component: InChargeRequestComponent;
  let fixture: ComponentFixture<InChargeRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InChargeRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InChargeRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
