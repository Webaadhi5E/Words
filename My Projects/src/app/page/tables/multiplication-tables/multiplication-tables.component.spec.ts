import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicationTablesComponent } from './multiplication-tables.component';
import { ActivatedRoute, RouterModule } from '@angular/router';

describe('MultiplicationTablesComponent', () => {
  let component: MultiplicationTablesComponent;
  let fixture: ComponentFixture<MultiplicationTablesComponent>;
  let mockActivatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiplicationTablesComponent, RouterModule.forRoot([])],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: mockActivatedRoute, // Provide the mock
        },
      ],
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
