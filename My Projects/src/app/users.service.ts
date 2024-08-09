import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public personsName: Array<any> = ['Alice', 'Bob', 'Charlie']
  constructor() { }

  public getUsers() {
    return this.personsName;
  }
}
