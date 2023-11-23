import { Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {DetailsPageComponent} from "./pages/details-page/details-page.component";

export const routes: Routes = [{
  path: 'home', component: HomePageComponent
}, {
  path: 'details/:id', component: DetailsPageComponent
}, {
  path: '**', redirectTo: '/home'
}];
