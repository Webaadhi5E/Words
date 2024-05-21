import { CommonModule } from '@angular/common';
import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonUtlisPopupComponent } from 'src/app/common-utils/common-utlis-popup/common-utlis-popup.component';
import { HeaderComponent } from 'src/app/common/header/header.component';


@Component({
  selector: 'app-crud-app',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule,HeaderComponent],
  templateUrl: './crud-app.component.html',
  styleUrl: './crud-app.component.scss'
})
export class CrudAppComponent {

  @ViewChild('commonPopUp', { read: ViewContainerRef })
  commonPopUpContainer!: ViewContainerRef;
  public commonPopUpComp!: ComponentRef<CommonUtlisPopupComponent>;

  public userObj: Array<any> = [
    {
      id: 1,
      name: 'Aadithya',
      age: 30,
      experience: `10 years`,
      languages: ['Angular', 'Javascript', 'Html', 'Scss'],
    },
    {
      id: 2,
      name: 'Manoj',
      age: 26,
      experience: `5 years`,
      languages: [
        'Angular',
        'Javascript',
        'Html',
        'Scss',
        'React',
        'Jquery',
        'NodeJs',
      ],
    },
    {
      id: 3,
      name: 'Saravana',
      age: 30,
      experience: `9 years`,
      languages: ['React', 'Javascript', 'Html', 'Scss'],
    },
    {
      id: 4,
      name: 'Anoop',
      age: 30,
      experience: `10 years`,
      languages: ['Vue', 'Javascript', 'Html', 'Scss'],
    },
  ];
  public displayedUserDetails: Array<any> = [];
  public newName: string = "";
  public temIndex: any;
  constructor() {
    this.displayedUserDetails = this.userObj
  }

  public renameCandidate() {
    this.displayedUserDetails[this.temIndex].name = this.newName;
  }

  public changeName(name: any, i: any) {
    this.newName = name;
    this.temIndex = i;
  }

  public searchItem(e: any) {
    if (!e.target.value) {
      return (this.displayedUserDetails = this.userObj);
    } else {
      this.displayedUserDetails = [];
      this.userObj.filter((items: any) => {
        if (items.name.toLowerCase() === e?.target.value.toLowerCase()) {
          this.displayedUserDetails.push(items);
        }
      })
    }
  }

  public openAddNewPopUp() {
    this.commonPopUpContainer.clear();
    this.commonPopUpComp = this.commonPopUpContainer.createComponent(CommonUtlisPopupComponent);
    this.commonPopUpComp.instance.openModalPopup();
  }
}
