import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive,ReactiveFormsModule,FormsModule,HttpClientModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  public registrationForm!: FormGroup;
    public submitted: boolean = false;
    public passwordText: string = '';
    public passwordValidation: boolean = false;
    public confirmpasswordtxt: string = '';
    public showPasswordSection = false;
  
    constructor(private http: HttpClient, private formbuilder: FormBuilder, private router:Router) {
      
     }
  
    // convenience getter for easy access to form fields
    public get form() { return this.registrationForm.controls; }
  
    ngOnInit(): void {
      this.registrationForm = new FormGroup({
        userName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
        email: new FormControl(  ),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', [Validators.required]),
        acceptTerms: new FormControl(false, [Validators.required])
  
      })
    }
  
    public onsubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.registrationForm.invalid) {
        alert('Form is not valid!!')
        return;
      }
      console.log(this.registrationForm, "~~")
      // display form values on success
      localStorage.setItem("mykey", JSON.stringify(this.registrationForm.value));
      this.router.navigate(['/login'])
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registrationForm.value, null, 4));
  
    }
  
    
  
    public onReset() {
      this.submitted = false;
      this.registrationForm.reset();
    }
  
    public passwordCheckList = [
      { index: 0, key: "length", text: "Password must be between 6 to 50 characters", point: false, class: 'uncheck' },
      { index: 1, key: "upperlower", text: "Password must have alphabet characters (Aa-Zz)", point: false, class: 'uncheck' },
      { index: 2, key: "number", text: "Password must have numeric digits (0-9)", point: false, class: 'uncheck' },
      { index: 3, key: "character", text: "Password must have special characters (!@#$%^&*,)", point: false, class: 'uncheck' },
      { index: 4, key: "passwordMatch", text: "New & Confirmation Passwords must match", point: false, class: 'uncheck' }
    ];
  
    public passwordValidator(event: any) {
      this.passwordText = event.target.value;
      if (this.passwordText.length > 5 && this.passwordText.length < 51) {
        this.passwordCheckList[0]['class'] = 'check';
      } else {
        this.passwordCheckList[0]['class'] = 'uncheck';
      }
      if ((/[a-z]/.test(this.passwordText)) || (/[A-Z]/.test(this.passwordText))) {
        this.passwordCheckList[1]['class'] = 'check';
      } else {
        this.passwordCheckList[1]['class'] = 'uncheck';
      }
      if ((/[0-9]/.test(this.passwordText))) {
        this.passwordCheckList[2]['class'] = 'check';
      } else {
        this.passwordCheckList[2]['class'] = 'uncheck';
      }
      if ((/[!@#\$%\^&\*]/.test(this.passwordText))) {
        this.passwordCheckList[3]['class'] = 'check';
      } else {
        this.passwordCheckList[3]['class'] = 'uncheck';
      }
      if (this.passwordText === this.confirmpasswordtxt) {
        this.passwordCheckList[4]['class'] = 'check';
      } else {
        this.passwordCheckList[4]['class'] = 'uncheck';
      }
      this.passwordValidation = this.passwordCheckList.every(this.isSameAnswer);
    }
  
    public passwordValidatorMatch() {
      if (this.passwordText === this.confirmpasswordtxt) {
        this.passwordCheckList[4]['class'] = 'check';
      } else {
        this.passwordCheckList[4]['class'] = 'uncheck';
      }
      this.passwordValidation = this.passwordCheckList.every(this.isSameAnswer);
    }
  
    public isSameAnswer(el: any, ind: any) {
      if (ind === 0) {
        return true;
      } else {
        return (el['class'] === 'check');
      }
    }
}
