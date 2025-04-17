import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _username: string | null = localStorage.getItem('username');

  get username(): string | null {
    return this._username;
  }

  login(username: string) {
    this._username = username;
    localStorage.setItem('username', username);
  }

  logout() {
    this._username = null;
    localStorage.removeItem('username');
  }

  isLoggedIn(): boolean {
    return !!this._username;
  }
}
