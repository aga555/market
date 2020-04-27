import {Component, OnInit} from '@angular/core';
import {LoginService} from './services/login.service';
import {User} from './User';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: User;

  constructor(
    private loginService: LoginService) {
  }

  ngOnInit(): void {

    this.loginService.getUser().subscribe((user: User) => {
      this.user = user;
    });
  }


  logName(value: string) {
    console.log(value);

  }

  logOut() {
    this.loginService.logOut();
  }
}
