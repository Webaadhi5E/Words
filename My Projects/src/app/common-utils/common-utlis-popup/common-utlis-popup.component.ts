import { Component, ViewChild } from '@angular/core';

declare let bootstrap: any;
@Component({
  selector: 'app-common-utlis-popup',
  standalone: true,
  imports: [],
  templateUrl: './common-utlis-popup.component.html',
  styleUrl: './common-utlis-popup.component.scss'
})
export class CommonUtlisPopupComponent {

  public userPopup: any;

  constructor() {

  }

  public openModalPopup() {
    this.userPopup = new bootstrap.Modal("#addUserModal");
    this.userPopup.show();
  }
}
