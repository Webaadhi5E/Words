import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome/welcome-page/welcome-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'welcome', loadChildren: () => import('./routes/welcome-routing.module').then((m) => m.WelcomeRoutingModule) },
  { path: 'login', loadChildren: () => import('./routes/login-routing.module').then((m) => m.LoginRoutingModule) },
  { path: 'project', loadChildren: () => import('./routes/project-routing.module').then((m) => m.ProjectRoutingModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
