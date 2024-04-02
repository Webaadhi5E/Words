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

}