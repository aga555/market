import {Injectable} from '@angular/core';
import {User} from '../User';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: BehaviorSubject<User> = new BehaviorSubject(undefined);

  constructor() {
  }

  logIn(username: string, password: string) {
    if (username && password) {
      this.user.next(new User(username, password));

    }
  }

  logOut() {
    this.user.next(undefined);
  }

  getUser(): Observable <User> {
    return this.user;
  }
}
