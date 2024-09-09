import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorPalletsComponent } from '../page/color-pallets/color-pallets.component';
import { CrudAppComponent } from '../page/crud-app/crud-app.component';
import { StudentsPageComponent } from '../page/students-page/students-page.component';
import { MultiplicationTablesComponent } from '../page/tables/multiplication-tables/multiplication-tables.component';
import { ToDoListComponent } from '../page/to-do-list/to-do-list.component';
import { UserDetailComponent } from '../page/user-project/user-detail.component';

const routes: Routes = [
  { path: 'user-details', component: UserDetailComponent, title: 'Users-Detail' },
  { path: 'color-pallet', component: ColorPalletsComponent, title: "Colors-Pallet" },
  { path: 'tables', component: MultiplicationTablesComponent, title: 'Multiplication-Tables' },
  { path: 'crud', component: CrudAppComponent, title: 'CRUD-Project' },
  { path: 'candidate', component: StudentsPageComponent, title: 'Candidate Details' },
  { path: 'to-do', component: ToDoListComponent, title: 'To-Do-List-Page' },
  // { path: 'student-details', component: StudentDetailsComponent, title: 'Student-Details' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
