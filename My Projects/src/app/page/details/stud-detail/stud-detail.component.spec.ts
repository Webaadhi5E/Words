import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudDetailComponent } from './stud-detail.component';

describe('StudDetailComponent', () => {
  let component: StudDetailComponent;
  let fixture: ComponentFixture<StudDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
