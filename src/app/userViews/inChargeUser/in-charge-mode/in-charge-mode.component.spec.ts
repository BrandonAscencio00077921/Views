import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InChargeModeComponent } from './in-charge-mode.component';

describe('InChargeModeComponent', () => {
  let component: InChargeModeComponent;
  let fixture: ComponentFixture<InChargeModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InChargeModeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InChargeModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
