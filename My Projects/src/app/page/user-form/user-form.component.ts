import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, FormsModule, CommonModule, FontAwesomeModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {



  @Output() emitUserForm = new EventEmitter()

  public faPlusCircle = faPlusCircle;
  public UserDetailForm!: FormGroup;
  public userAge: Array<any> = [
    { ageLimit: "0 - 20" },
    { ageLimit: "20 - 40" },
    { ageLimit: "40 - 60" },
    { ageLimit: "60 - 80" },
    { ageLimit: "80 - 100" },

  ]
  public formDetails: any[] = [];
  public addedHobbies: Array<any> = [];
  public hobbies: string = "";
  constructor() {
    this.prepareFormObj();

  }

  public prepareFormObj() {
    this.UserDetailForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      age: new FormControl(),
      gender: new FormControl(),
      hobbies: new FormControl(),
      confirm: new FormControl(false, [Validators.required])
    })
  }

  public resetForm() {
    this.UserDetailForm.reset();
  }

  public onSubmit() {
    this.addHobbies();
    this.UserDetailForm.patchValue({
      hobbies: this.addedHobbies,
    })
    this.formDetails = this.UserDetailForm.value;
    console.log(this.formDetails);
    this.addedHobbies = [];
    localStorage.setItem('mykey', JSON.stringify(this.UserDetailForm.value))
    this.UserDetailForm.reset();
    this.emitUserForm.emit(this.formDetails)
  }

  public addHobbies() {
    let selectedHobiies = this.UserDetailForm.value['hobbies'];
    if (this.addedHobbies.length === 0) {
      this.addedHobbies.push(selectedHobiies)
    } else if (!this.addedHobbies.includes('hobbies')) {
      this.addedHobbies.push(selectedHobiies);
    } else {
      alert("Hobbies are already Existed");
    }
    this.hobbies = "";
  }
}
