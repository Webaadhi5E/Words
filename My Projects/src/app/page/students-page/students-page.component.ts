import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-students-page',
  standalone: true,
  imports: [],
  templateUrl: './students-page.component.html',
  styleUrl: './students-page.component.scss'
})
export class StudentsPageComponent {
  public originalData: Array<any> = [];
  public displayedData: Array<any> = [];
  public selectedNumber: number = 0;
  public currentPage: number = 1;
  public itemsPerPage: number = 5;
  public addUserForm: FormGroup | any;
  public showStudentDetail: any;
  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.getStudentData();
    this.submitDisplayList();
    this.prepareFormObj();

  }

  public getStudentData() {
    this.http.get('https://66338431f7d50bbd9b49a5cf.mockapi.io/api/v1/students123').subscribe((data: any) => {
      this.getStudentDataResponse(data);
    })
  }

  public getStudentDataResponse(resp: any) {
    this.originalData = resp;
    this.displayedData = this.originalData;
  }

  public submitDisplayList() {
    console.log(this.selectedNumber);

    if (this.selectedNumber) {
      this.displayedData = [];
      this.displayedData = this.originalData.slice(0, this.selectedNumber);
      console.log(this.displayedData);

      this.selectedNumber = 0;
    } else {
      this.displayedData = [];
    }
  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex(): number {
    return Math.min(this.startIndex + this.itemsPerPage - 1, this.displayedData.length - 1);
  }

  public setPage(page: number): void {
    this.currentPage = page;
  }
  public prepareFormObj() {
    this.addUserForm = this.formBuilder.group({
      name: ['', Validators.required],
      dob: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], // Apply email validator here
      rollno: ['', Validators.required],
      standard: ['', Validators.required],
      contact: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

  public submitUserForm() {
    if (this.addUserForm.valid) {
      const formData = this.addUserForm.value;
      this.http.post<any>('https://66338431f7d50bbd9b49a5cf.mockapi.io/api/v1/students123', formData)
        .subscribe(
          (response) => {
            console.log('Post success:', response);
          },
          (error) => {
            console.error('Post error:', error);
          }
        );
    } else {
      console.error('Form is invalid');
    }

    this.addUserForm.reset();
  }
}
