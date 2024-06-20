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
  public newCandidateForm!: FormGroup;
  formBuilder: any;
  http: any;
  public openCandidatePopup: any;
  constructor() {
    this.prepareForm();
    this.prepareFormObj();
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

  // New Candidate added Form

  public prepareFormObj() {
    this.newCandidateForm = new FormGroup({
      name: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required), // Apply email validator here
      rollno: new FormControl('', Validators.required),
      standard: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
    });
  }

  public submitUserForm() {
    if (this.newCandidateForm.valid) {
      const formData = this.newCandidateForm.value;
      // this.http.post('https://66338431f7d50bbd9b49a5cf.mockapi.io/api/v1/students123', formData)
      //   .subscribe(
      //     (response) => {
      //       console.log('Post success:', response);
      //     },
      //     (error) => {
      //       console.error('Post error:', error);
      //     }
      //   );
      this.http.post('https://66338431f7d50bbd9b49a5cf.mockapi.io/api/v1/students123', formData).subscribe((resp: any) => {
        console.log('Post success', resp);
      }, (error: any) => {
        console.log('Post Error', error);

      })
    } else {
      console.error('Form is invalid');
    }
    this.newCandidateForm.reset();
  }

  public openCandidateModalPopup() {
    this.openCandidatePopup = new bootstrap.Modal("#studentModal");
    this.openCandidatePopup.show();
  }
}
