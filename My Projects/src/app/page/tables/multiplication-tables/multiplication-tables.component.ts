import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from 'src/app/common/header/header.component';

@Component({
  selector: 'app-multiplication-tables',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './multiplication-tables.component.html',
  styleUrl: './multiplication-tables.component.scss'
})
export class MultiplicationTablesComponent {
  public tablesList: Array<any> = [];

  constructor() {
    this.tablesList = this.getTablesList(10);
  }

  public getTablesList(a: any) {
    return new Array(a).fill(0).map((a: any, index: any) => index + 1)
  }
}
