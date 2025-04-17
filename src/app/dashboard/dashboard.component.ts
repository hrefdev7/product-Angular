
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  username: string = '';

  constructor(private router: Router, private userService: UserService) {
    this.username = this.userService.username || 'User';
  }
  isDarkTheme = false;
  logout() {
    this.userService.logout();
    this.router.navigate(['/login']); // ✅ route from the component
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
    document.body.classList.toggle('light-theme', !this.isDarkTheme);
  }
}
