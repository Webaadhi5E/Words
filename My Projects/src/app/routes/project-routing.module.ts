import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from '../page/user-project/user-detail.component';
import { ColorPalletsComponent } from '../page/color-pallets/color-pallets.component';
import { MultiplicationTablesComponent } from '../page/tables/multiplication-tables/multiplication-tables.component';
import { CrudAppComponent } from '../page/crud-app/crud-app.component';
import { StudentDetailsComponent } from '../page/student-details/student-details.component';

const routes: Routes = [
  { path: 'user-details', component: UserDetailComponent, title: 'Users-Detail' },
  { path: 'color-pallet', component: ColorPalletsComponent, title: "Colors-Pallet" },
  { path: 'tables', component: MultiplicationTablesComponent, title: 'Multiplication-Tables' },
  { path: 'crud', component: CrudAppComponent, title: 'CRUD-Project' },
  { path: 'student-details', component: StudentDetailsComponent, title: 'Student-Details' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
