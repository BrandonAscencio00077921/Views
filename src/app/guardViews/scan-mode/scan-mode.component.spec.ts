import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanModeComponent } from './scan-mode.component';

describe('ScanModeComponent', () => {
  let component: ScanModeComponent;
  let fixture: ComponentFixture<ScanModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScanModeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScanModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
