import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page.component';
import { UserComponent } from 'src/app/page/user/user.component';

const routes: Routes = [
  { path: '', redirectTo:'welcome-page',pathMatch:'full'},
  { path: 'welcome-page', component: WelcomePageComponent,children:[
    { path: '', redirectTo:'user',pathMatch:'full'},
    { path: 'user', component: UserComponent,title:'User' },
  ] },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
