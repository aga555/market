import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private  loginService: LoginService, private  router: Router) {
  }

  ngOnInit(): void {
  }

  login() {
    this.loginService.logIn(this.username, this.password);
    this.username = '';
    this.password = '';
    this.router.navigate(['/home']);

  }

  cancel() {
    this.username = '';
    this.password = '';
    this.router.navigate(['/home']);

  }
}
