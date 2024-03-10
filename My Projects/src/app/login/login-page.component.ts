import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser,faKey } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, FormsModule, ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  @Input() loginPage: string | undefined;
  public loginForm!: FormGroup;
  router: any;
  public showPassword!: boolean;
  public input: any;
  public submitted: boolean = false;
  public faUser = faUser;
  public faKey = faKey;


  constructor(private route: Router) { }

  public get form() { return this.loginForm.controls; }
  public enterdData: any;
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      emailid: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$')]),
      password: new FormControl('', [Validators.required, Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
      )]),
    })
  }

  public onSubmit() {
    console.log("//////////");
    this.enterdData = JSON.stringify(this.loginForm.value);
    console.log(this.enterdData);
    this.checkLocalData(JSON.parse(this.enterdData));
  }

  public checkLocalData(data: any) {
    let localdata: any = JSON.parse(localStorage.getItem('mykey') || '{}');
    console.log(localdata);
    
    if (localdata && localdata.email === data.emailid) {
      console.log(localdata && localdata.email === data.emailid);
      
      if (localdata.password === data.password) {
        this.route.navigate(["/welcome"])
        console.log("Valid form");
        
      }
    }
    else {
      console.log("2222222222");
      this.route.navigate(["/login"])
      alert("enter valid emailid & Password")
    }
  }

  public toggleShow() {
    this.showPassword = !this.showPassword;
    this.input.type = this.showPassword ? 'text' : 'password';
  }
}
