import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
  imports: [CommonModule, RouterLink, RouterLinkActive, ReactiveFormsModule, FormsModule, FontAwesomeModule],
})
export class SignUpComponent implements OnInit {

  public newAccountForm!: FormGroup;
  public isSubmitted: boolean = false;
  public newAccoutData: Array<any> = [];
  public faInfo = faInfo;
  protected route = inject(Router);
  constructor() {
  }

  ngOnInit(): void {
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

  get newAccountControls() {
    return this.newAccountForm.controls;
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

      sessionStorage.setItem('mykey', JSON.stringify(this.newAccountForm.value));
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
