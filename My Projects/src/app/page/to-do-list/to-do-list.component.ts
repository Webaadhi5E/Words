import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from 'src/app/common/header/header.component';
import { HoverHighlightDirective } from 'src/app/hover-highlight.directive';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [HeaderComponent, NgClass, FormsModule, HoverHighlightDirective],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent {

}
