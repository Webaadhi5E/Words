import { CommonModule } from '@angular/common';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from 'src/app/common/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { SEARCHDROPDOWN } from './student.interface';

@Component({
  selector: 'app-student-details',
  standalone: true,
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.scss', imports: [CommonModule, FormsModule, ReactiveFormsModule, HeaderComponent, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatIconModule],
  providers: [provideNativeDateAdapter(),]
})
export class StudentDetailsComponent {

  public studentsMainDataList: Array<any> = [];
  public header = signal<string>("Students Record");
  public studentName: string = "";
  public locationList: Array<any> = [];
  public displayedList: Array<any> = [];
  public departmentList: Array<any> = [];
  public isSearchEnable: boolean = false;
  public locationSearch = new FormControl('');
  public departmentSearch = new FormControl('');
  public isSearchVisible: boolean = false;
  public dropDownField = SEARCHDROPDOWN;
  constructor(private http: HttpClient) {
    this.getMainStudentsData();
    this.locationSearch.valueChanges.subscribe((value: any) => this.filterLocation(value));
    this.departmentSearch.valueChanges.subscribe((value: any) => this.filterDepartment(value));
  }

  public getToday() {
    return new Date().toISOString().split('T')[0];
  }

  public getMainStudentsData() {
    this.http.get('assets/students-data.json').subscribe((data: any) => {
      this.getMainStudentsDataResponse(data);
    })
  }

  public getMainStudentsDataResponse(resp: any) {
    this.studentsMainDataList = resp;
    this.displayedList = this.studentsMainDataList;
    this.displayedList.map((location: any) => {
      this.locationList.push(location.location);
    });
    this.displayedList.map((department: any) => {
      this.departmentList.push(department.department)
    })
  }

  public filterLocation(location: string) {
    let searchedLocation = location.split(",")[0];
    this.displayedList = this.studentsMainDataList.filter((location: any) => location.location.split(",")[0] == searchedLocation);
  }

  public filterDepartment(department: string) {
    let searchedDepartment = department;
    this.displayedList = this.studentsMainDataList.filter((department: any) => department.department == searchedDepartment);
  }

  public onChangeSearchItems(e: any) {


  }
}
