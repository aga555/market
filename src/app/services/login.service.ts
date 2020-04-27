import {Injectable} from '@angular/core';
import {User} from '../User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: User;

  constructor() {
  }

  logIn(username: string, password: string) {
    if (username && password) {
      this.user = new User(username, password);
      console.log('user:' + this.user.username);
    }
  }

  logOut() {
    this.user = undefined;
  }

  getUser(): User {
    return this.user;
  }
}
