import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfferComponent } from './components/offer/offer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { PriceRangePipe } from './price-range.pipe';
import { LoginComponent } from './components/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { OffersListComponent } from './components/offers-list/offers-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddOfferComponent } from './components/add-offer/add-offer.component';
import { OfferDetailComponent } from './components/offer-detail/offer-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    OfferComponent,
    PriceRangePipe,
    LoginComponent,
    OffersListComponent,
    NotFoundComponent,
    AddOfferComponent,
    OfferDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
