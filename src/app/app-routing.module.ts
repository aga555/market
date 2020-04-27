import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OffersListComponent} from './components/offers-list/offers-list.component';
import {NotFoundComponent} from './components/not-found/not-found.component';


const routes: Routes = [
  {
    path: 'home',
    component: OffersListComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
