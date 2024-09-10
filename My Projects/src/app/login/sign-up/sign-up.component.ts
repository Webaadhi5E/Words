import { CommonModule } from '@angular/common';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule, FormsModule, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
  imports: [CommonModule, RouterLink, RouterLinkActive, ReactiveFormsModule, FormsModule],
})
export class SignUpComponent implements OnInit {

  public newAccountForm!: FormGroup;
  public isSubmitted: boolean = false;
  public newAccoutData: Array<any> = [];
  protected route = inject(Router);
  constructor() {
  }

  ngOnInit(): void {
    this.prepareForm();
  }

  get newAccountControls() {
    return this.newAccountForm.controls;
  }

  public prepareForm() {
    this.newAccountForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', Validators.required),
    },
      {
        validators: this.passwordMatchValidation,
      }
    )
  }

  public passwordMatchValidation: ValidatorFn = (form: AbstractControl) => {
    const password = form.get('password')?.value;
    const confirmPaswsword = form.get('confirmPassword')?.value;
    return password === confirmPaswsword ? null : { passwordsMismatch: true };
  }

  public submitForm() {
    if (this.newAccountForm.valid) {
      this.newAccoutData = this.newAccountForm.value;
      console.log(this.newAccoutData);

      localStorage.setItem('mykey', JSON.stringify(this.newAccountForm.value));
      this.route.navigate(['/login'])
      this.newAccountForm.reset();
    } else {
      alert("Form is Invalid")
    }
  }

  public resetForm() {
    this.newAccountForm.reset()
  }
}
