import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from 'src/app/common/header/header.component';
import { UserFormComponent } from 'src/app/page/user-form/user-form.component';
@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, ReactiveFormsModule, FormsModule, CommonModule, FontAwesomeModule, UserFormComponent],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss'
})
export class WelcomePageComponent {

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
