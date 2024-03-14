import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from 'src/app/common/header/header.component';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss'
})
export class WelcomePageComponent {

  public UserDetailForm!: FormGroup;
  public userAge: Array<any> = [
    { ageLimit: "0 - 20" },
    { ageLimit: "20 - 40" },
    { ageLimit: "40 - 60" },
    { ageLimit: "60 - 80" },
    { ageLimit: "80 - 100" },

  ]
  public formDetails: any[] = [];


  constructor() {
    this.prepareFormObj();
    console.log(this.UserDetailForm.value);

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
    this.formDetails = this.UserDetailForm.value;
    console.log(this.formDetails);


  }
}
