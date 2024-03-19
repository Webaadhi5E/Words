import { Component } from '@angular/core';

@Component({
  selector: 'app-periodic-table',
  standalone: true,
  imports: [],
  templateUrl: './periodic-table.component.html',
  styleUrl: './periodic-table.component.scss'
})
export class PeriodicTableComponent {

  public candidateDetails: Array<any> = [
    {
      skillName: "Python",
      skillLevel: 3.5
    },
    {
      skillName: "Node-Js",
      skillLevel: 2.5
    },
    {
      skillName: "Javascript",
      skillLevel: 4.5
    },
    {
      skillName: "Angular",
      skillLevel: 4.5
    },
    {
      skillName: "Java",
      skillLevel: 2.5
    },
    {
      skillName: "Project Management",
      skillLevel: 4.5
    },
  ]

  constructor() {
    console.log(this.candidateDetails);

  }
}
