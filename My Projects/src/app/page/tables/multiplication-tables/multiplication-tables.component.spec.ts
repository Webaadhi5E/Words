import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicationTablesComponent } from './multiplication-tables.component';

describe('MultiplicationTablesComponent', () => {
  let component: MultiplicationTablesComponent;
  let fixture: ComponentFixture<MultiplicationTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiplicationTablesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultiplicationTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
