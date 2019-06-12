import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { DeleteTrackComponent } from './delete-track/delete-track.component';
import { DetailsMusicComponent } from './details-music/details-music.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/home'},
  {path:'home', component:HomeComponent},
  {path:'result/:name',component:SearchResultComponent},
  {path:'favs', component:WishlistComponent},
  {path:'deleted/:music', component:DeleteTrackComponent},
  {path:'details/:music/:artist',component:DetailsMusicComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
