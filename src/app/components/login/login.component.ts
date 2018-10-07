import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showPassword: Boolean;
  password: string;
  email: string;

  constructor() {
    this.showPassword = false;
  }

  ngOnInit() {
  }

  showPasswordToggle() {
    this.showPassword = !this.showPassword;
  }
}
