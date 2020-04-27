import {Component, OnInit} from '@angular/core';
import {Offer} from './Offer';
import {OfferService} from './services/offer.service';
import {LoginService} from './services/login.service';
import {User} from './User';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  offers: Offer [];
  user: User;

  constructor(private offerService: OfferService,
              private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.offers = this.offerService.getOffers();
    this.loginService.getUser().subscribe((user: User) => {
      this.user = user;
    });
  }



logName(value: string)
{
  console.log(value);

}
}
