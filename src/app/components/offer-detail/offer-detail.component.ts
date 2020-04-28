import {Component, OnInit} from '@angular/core';
import {Offer} from '../../Offer';
import {OfferService} from '../../services/offer.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.css']
})
export class OfferDetailComponent implements OnInit {
  offer: Offer;

  constructor(private offerService: OfferService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.offer = this.offerService.getOfferById(+params.get('id'));
    });
  }

  }
