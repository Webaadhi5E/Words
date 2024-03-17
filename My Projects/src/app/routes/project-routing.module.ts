import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from '../page/user-project/user-detail.component';
import { ColorPalletsComponent } from '../page/color-pallets/color-pallets.component';

const routes: Routes = [
  { path: 'user-details', component: UserDetailComponent, title: 'Users-Detail' },
  { path: 'color-pallet', component: ColorPalletsComponent, title: "Colors-Pallet" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
