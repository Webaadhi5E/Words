import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from 'src/app/common/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, HeaderComponent, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatIconModule],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class StudentDetailsComponent {

  public studentsMainDataList: Array<any> = [];
  public header = signal<string>("Students Record");
  public studentName: string = "";
  public locationList: Array<any> = [];
  public displayedList: Array<any> = [];
  public departmentList: Array<any> = [];
  public isSearchEnable: boolean = false;
  constructor(private http: HttpClient) {
    this.getMainStudentsData();
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

  public searchItems(e: any) {

  }
}
