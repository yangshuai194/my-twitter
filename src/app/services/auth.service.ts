import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logout() {
    localStorage.setItem('isLoggedIn', "false");
    localStorage.removeItem('token');
  }
}
