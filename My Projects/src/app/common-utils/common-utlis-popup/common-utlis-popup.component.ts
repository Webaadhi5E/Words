import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

declare let bootstrap: any;
@Component({
  selector: 'app-common-utlis-popup',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, NgSelectModule],
  templateUrl: './common-utlis-popup.component.html',
  styleUrl: './common-utlis-popup.component.scss'
})
export class CommonUtlisPopupComponent {

  @Output() emitForm: EventEmitter<any> = new EventEmitter();
  public userPopup: any;
  public addUserForm!: FormGroup;
  constructor() {
    this.prepareForm()
  }

  public openModalPopup() {
    this.userPopup = new bootstrap.Modal("#addUserModal");
    this.userPopup.show();
  }

  public prepareForm() {
    this.addUserForm = new FormGroup({
      name: new FormControl("", Validators.required),
      age: new FormControl("", Validators.required),
      experience: new FormControl("", Validators.required),
      language: new FormControl("", Validators.required),
    })
  }

  public onSubmitForm() {
    this.emitForm.emit(this.addUserForm.value);
    this.addUserForm.reset();
  }
}
