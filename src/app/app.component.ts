import {Component, OnInit} from '@angular/core';
import {Offer} from './Offer';
import {OfferService} from './services/offer.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  offers: Offer [];

  constructor(private offerService: OfferService) {
  }

  ngOnInit(): void {
    this.offers = this.offerService.getOffers();
  }

  logName(value: string) {
    console.log(value);

  }
}
