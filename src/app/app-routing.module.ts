import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OffersListComponent} from './components/offers-list/offers-list.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {LoginComponent} from './components/login/login.component';
import {AddOfferComponent} from './components/add-offer/add-offer.component';
import {OfferDetailComponent} from './components/offer-detail/offer-detail.component';


const routes: Routes = [
  {
    path: 'home',
    component: OffersListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'offer/add',
    component: AddOfferComponent
  },
  {
    path: 'offer/:id',
    component: OfferDetailComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '**',
    component: NotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
