import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email:string;

  constructor(private router: Router,public authService: AuthService) { }

  ngOnInit() {
    this.email = localStorage.getItem('token');
  }

  logout() {
    this.authService.logout();
  }
}
