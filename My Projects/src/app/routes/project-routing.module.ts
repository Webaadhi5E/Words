import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from '../page/user-project/user-detail.component';
import { ColorPalletsComponent } from '../page/color-pallets/color-pallets.component';
import { PeriodicTableComponent } from '../page/periodic-table/periodic-table.component';

const routes: Routes = [
  { path: 'user-details', component: UserDetailComponent, title: 'Users-Detail' },
  { path: 'color-pallet', component: ColorPalletsComponent, title: "Colors-Pallet" },
  { path: 'periodic-table', component: PeriodicTableComponent, title: "Periodic-Table" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
