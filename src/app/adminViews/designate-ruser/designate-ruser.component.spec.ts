import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignateRUserComponent } from './designate-ruser.component';

describe('DesignateRUserComponent', () => {
  let component: DesignateRUserComponent;
  let fixture: ComponentFixture<DesignateRUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignateRUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesignateRUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
