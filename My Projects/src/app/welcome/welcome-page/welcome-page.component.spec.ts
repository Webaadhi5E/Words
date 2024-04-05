import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePageComponent } from './welcome-page.component';
import { ActivatedRoute, RouterModule } from '@angular/router';

describe('WelcomePageComponent', () => {
  let component: WelcomePageComponent;
  let fixture: ComponentFixture<WelcomePageComponent>;
  let mockActivatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomePageComponent, RouterModule.forRoot([])],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: mockActivatedRoute, // Provide the mock
        },
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(WelcomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
