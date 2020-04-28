import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Offer} from '../../Offer';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  @Input() offer: Offer;
  @Output() clickEvent: EventEmitter<string> = new EventEmitter();

  constructor() {
  }


  ngOnInit(): void {
  }

}

