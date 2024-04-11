import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from 'src/app/common/header/header.component';
import { UserFormComponent } from 'src/app/page/user-project/user-form.component';
@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, ReactiveFormsModule, FormsModule, CommonModule, FontAwesomeModule, UserFormComponent],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss'
})
export class WelcomePageComponent implements OnInit, OnDestroy {

  public userDetails: Array<any> = [];
  public scrollValue: number = 0;
  constructor() {
    localStorage.getItem('data')
  }

  ngOnInit() {
    window.addEventListener('scroll', this.scrollEvent, true);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollEvent, true);
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

  public scrollEvent = (event: any): void => {
    this.scrollValue = event.srcElement.scrollTop;
  }

}
