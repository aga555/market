import {Injectable} from '@angular/core';
import {Offer} from '../Offer';

@Injectable({
  providedIn: 'root'
})
export class OfferService {


  constructor() {
  }

  offers: Offer[] = [
    {
      name: 'manicure',
      date: new Date('01/04/2020'),
      price: 150,
      description: 'perfect manicure for everyone',
      img: 'https://img.freepik.com/darmowe-zdjecie/kobiet-reki-i-kwiaty-z-kopii-przestrzenia_23-2148226454.jpg?size=626&ext=jpg'
    },

    {
      name: 'photograph',
      date: new Date('02/04/2020'),
      price: 50,
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
    ,
    {
      name: 'hair styling ',
      date: new Date('02/04/2020'),
      price: 20,
      description: 'professional hair cut',
      img: 'https://image.freepik.com/darmowe-zdjecie/zblizenie-stylista-ciecia-koncowki-wlosow_23-2147769835.jpg'
    },
    {
      name: 'personal trainer ',
      date: new Date('03/04/2020'),
      price: 120,
      description: ' weight loose, body muscle, professional  personal trainer',
      img: 'https://image.freepik.com/darmowe-zdjecie/srednio-strzal-kobieta-rozciaganie-z-miejsca-na-kopie_23-2148267333.jpg'
    }
    ,
    {
      name: 'florist ',
      date: new Date('03/04/2020'),
      price: 20,
      description: ' flowers for events',
      img: 'https://image.freepik.com/darmowe-zdjecie/ladna-kwiaciarnia-pozuje-z-bukietem_23-2147762236.jpg'
    }

  ];

  getOffers() {
    return this.offers;
  }


}
