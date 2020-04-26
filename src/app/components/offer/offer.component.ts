import { Component, OnInit } from '@angular/core';
import {Offer} from '../../Offer';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  constructor() { }

  offers: Offer[] = [
    {
      name: 'manicure',
      date: new Date('01/04/2020'),
      price: 50,
      description: 'perfect manicure for everyone',
      img: 'https://img.freepik.com/darmowe-zdjecie/kobiet-reki-i-kwiaty-z-kopii-przestrzenia_23-2148226454.jpg?size=626&ext=jpg'
    },

    {
      name: 'photograph',
      date: new Date('02/04/2020'),
      price: 250,
      description: 'weeding photography,  business photo',
      img: 'https://image.freepik.com/darmowe-zdjecie/widok-z-gory-aparatu-dslr-filizanka-herbaty-notes-spiralny-dlugopis-obiektyw-aparatu-i-torba-na-drewnianym-stole_23-2148038885.jpg'
    },
    {
      name: 'makeup ',
      date: new Date('02/04/2020'),
      price: 250,
      description: 'make up artist',
      img: 'https://img.freepik.com/darmowe-zdjecie/lustro-z-cieniami-do-powiek-i-szczotkami-na-rozowym-stole_23-2148047056.jpg?size=626&ext=jpg'
    }
  ];

  ngOnInit(): void {
  }
}
