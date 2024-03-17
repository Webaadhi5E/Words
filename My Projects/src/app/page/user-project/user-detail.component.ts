import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form.component';
import { HeaderComponent } from 'src/app/common/header/header.component';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,UserFormComponent,HeaderComponent],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {

  public userDetails: Array<any> = [];
  constructor() {
    localStorage.getItem('data')
  }

  public getUserDetail(e: any) {
    const dataDetails = e;
    // this.userDetails = JSON.parse(localStorage.getItem('mykey') || "{}")
    this.userDetails.push(dataDetails);
    console.log(this.userDetails);
  }

  public removeUserDetails(index: any) {
    this.userDetails.splice(index, 1);
    console.log(this.userDetails);

  }
}
