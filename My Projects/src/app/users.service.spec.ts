import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return list of Persons', () => {
    const users=service.getUsers();
    expect(users.length).toBe(3);
    expect(users).toEqual(['Alice','Bob','Charlie'])
  })
});
