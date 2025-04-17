import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(): boolean {
    if (this.userService.isLoggedIn()) {
      this.router.navigate(['/dashboard']); // 🚫 Block access, redirect logged-in user
      return false;
    }
    return true; // ✅ Allow access if not logged in
  }
}
