import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModeComponent } from './common-mode.component';

describe('CommonModeComponent', () => {
  let component: CommonModeComponent;
  let fixture: ComponentFixture<CommonModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommonModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
