import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Offer} from '../../Offer';
import {OfferService} from '../../services/offer.service';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {
  offerForm: FormGroup;

  constructor(private  formBuilder: FormBuilder, private  router: Router, private offerService:OfferService) {
    this.offerForm = this.formBuilder.group({
      name: [],
      price: [( [Validators.required])],
      date:[''],
      description: [],
      img: [],
    });


  }
  save(){
    const offer: Offer = {
      name: this.offerForm.controls.name.value,
      price: this.offerForm.controls.price.value,
      description: this.offerForm.controls.description.value,
      date:  new Date(this.offerForm.controls.date.value),
      img: this.offerForm.controls.img.value
    };
    this.offerService.addOffer(offer);
    this.router.navigate(['/home']);
  }

 cancel(){
   this.router.navigate(['/home']);
 }
  ngOnInit(): void {
  }

}
