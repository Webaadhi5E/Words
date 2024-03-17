import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from '../login/sign-up/sign-up.component';
import { LoginPageComponent } from '../login/login-page.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  { path: 'sign-up', component: SignUpComponent, title: 'Sign-up-page' },
  { path: 'login', component: LoginPageComponent, title: 'login' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
