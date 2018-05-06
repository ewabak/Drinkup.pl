import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { browser } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  // loginGoogle() {
    // this.authService.googleLogin();
  // }
  
}
