import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {
  offerForm: FormGroup;

  constructor() {
    this.offerForm = new FormGroup({
      name: new FormControl(),
      price: new FormControl('',[Validators.required]),
      date: new FormControl(),
      description: new FormControl(),
      img: new FormControl(),

    });
  }

  ngOnInit(): void {
  }

}
