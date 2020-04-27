import {Component, OnInit} from '@angular/core';
import {OfferService} from '../../services/offer.service';
import {Offer} from '../../Offer';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css']
})
export class OffersListComponent implements OnInit {

  offers: Offer [];
  constructor(private  offerService: OfferService) {
  }

  ngOnInit(): void {
    this.offers = this.offerService.getOffers();
  }
  logName(value: string) {
    console.log(value);

  }
}
