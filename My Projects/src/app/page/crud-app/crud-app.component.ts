import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-crud-app',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './crud-app.component.html',
  styleUrl: './crud-app.component.scss'
})
export class CrudAppComponent {



  public userObj: Array<any> = [
    {
      id: 1,
      name: 'Aadithya',
      age: 30,
      experience: `10 years`,
      languages: ['Angular', 'Javascript', 'Html', 'Scss'],
    },
    {
      id: 2,
      name: 'Manoj',
      age: 26,
      experience: `5 years`,
      languages: [
        'Angular',
        'Javascript',
        'Html',
        'Scss',
        'React',
        'Jquery',
        'NodeJs',
      ],
    },
    {
      id: 3,
      name: 'Saravana',
      age: 30,
      experience: `9 years`,
      languages: ['React', 'Javascript', 'Html', 'Scss'],
    },
    {
      id: 4,
      name: 'Anoop',
      age: 30,
      experience: `10 years`,
      languages: ['Vue', 'Javascript', 'Html', 'Scss'],
    },
  ];
  public displayedUserDetails: Array<any> = [];
  public newName: string = "";
  constructor() {
    this.displayedUserDetails = this.userObj
  }

  public renameCandidate() {

  }
}
