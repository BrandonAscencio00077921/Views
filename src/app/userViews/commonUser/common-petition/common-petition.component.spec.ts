import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonPetitionComponent } from './common-petition.component';

describe('CommonPetitionComponent', () => {
  let component: CommonPetitionComponent;
  let fixture: ComponentFixture<CommonPetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonPetitionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommonPetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
