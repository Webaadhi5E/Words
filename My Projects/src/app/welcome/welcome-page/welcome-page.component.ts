import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from 'src/app/common/header/header.component';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [HeaderComponent,RouterOutlet],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss'
})
export class WelcomePageComponent {

}
