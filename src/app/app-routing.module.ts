import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OffersListComponent} from './components/offers-list/offers-list.component';


const routes: Routes = [
  {
    path: 'home',
    component: OffersListComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
