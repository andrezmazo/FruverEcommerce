import { Injectable } from '@angular/core';
import usersData from '../data/users.json';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users = usersData;
  private isLoggedIn = false;
  private currentUser: any = null;

  constructor() {}

  login(username: string, password: string): boolean {
    const user = this.users.find(
      (u) => u.name === username && u.password === password
    );
    if (user) {
      this.isLoggedIn = true;
      this.currentUser = user;
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.currentUser = null;
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  getCurrentUser(): any {
    return this.currentUser;
  }

  getRole(): string {
    return this.currentUser ? this.currentUser.role : '';
  }
}
