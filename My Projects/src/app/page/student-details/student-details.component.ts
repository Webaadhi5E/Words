import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.scss'
})
export class StudentDetailsComponent {

  public studentsMainDataList: Array<any> = [];
  public header = signal<string>("Students Record");
  public studentName: string = "";
  public locationList: Array<any> = [];
  public displayedList: Array<any> = [];
  constructor(private http: HttpClient) {
    this.getMainStudentsData();
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
    console.log(this.locationList);

  }
}
