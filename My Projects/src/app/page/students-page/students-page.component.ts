import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonUtlisPopupComponent } from 'src/app/common-utils/common-utlis-popup/common-utlis-popup.component';
import { HeaderComponent } from '../../common/header/header.component';

@Component({
  selector: 'app-students-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HeaderComponent],
  templateUrl: './students-page.component.html',
  styleUrl: './students-page.component.scss'
})
export class StudentsPageComponent {

  @ViewChild('commonPopUp', { read: ViewContainerRef })
  commonPopUpContainer!: ViewContainerRef;
  public commonPopUpComp!: ComponentRef<CommonUtlisPopupComponent>;

  public originalData: Array<any> = [];
  public displayedData: Array<any> = [];
  public selectedNumber: number = 0;
  public currentPage: number = 1;
  public itemsPerPage: number = 5;
  public showStudentDetail: any;
  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.getStudentData();
    this.submitDisplayList();

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
    if (this.selectedNumber) {
      this.displayedData = [];
      this.displayedData = this.originalData.slice(0, this.selectedNumber);
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

  public openAddNewPopUp() {
    this.commonPopUpContainer.clear();
    this.commonPopUpComp = this.commonPopUpContainer.createComponent(CommonUtlisPopupComponent);
    this.commonPopUpComp.instance.openCandidateModalPopup();
    this.commonPopUpComp.instance.emitForm.subscribe((event: any) => {
    this.displayedData.unshift(event);
    })
  }

}
