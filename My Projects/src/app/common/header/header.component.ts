import { CommonModule, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Route, Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Input() scroll: number = 0;
  public isOpen: boolean = false;

  constructor(private router: Router) {

  }

  public logout() {
    localStorage.removeItem('mykey');
    this.router.navigate(['login']);
  }
}
