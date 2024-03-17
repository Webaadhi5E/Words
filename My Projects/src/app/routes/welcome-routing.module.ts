import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from '../welcome/welcome-page/welcome-page.component';

const routes: Routes = [
  { path: '', redirectTo:'welcome-page',pathMatch:'full'},
  { path: 'welcome-page', component: WelcomePageComponent,children:[
    
  ] },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
