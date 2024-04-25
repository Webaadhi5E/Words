import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonUtlisPopupComponent } from './common-utlis-popup.component';

describe('CommonUtlisPopupComponent', () => {
  let component: CommonUtlisPopupComponent;
  let fixture: ComponentFixture<CommonUtlisPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonUtlisPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommonUtlisPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
