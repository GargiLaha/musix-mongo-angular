import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MuzixServiceService } from '../muzix-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private musicService: MuzixServiceService ,private route :Router) { }
musics:any [];
  ngOnInit() {
    this.musicService.getTrendMusic().subscribe(data =>
      {
        console.log(data.tracks.track);
        this.musics=data.tracks.track;
      });
  }
 public clickSearch(value)
 {
  this.route.navigateByUrl("/result/"+value);
 }

 public addToWishlist(value)
 {

  let myObj = {
    trackId : value.listeners,
    trackName : value.name,
    comment : value.artist.name
  }
  console.log(myObj);

  this.musicService.addtoWishlist(myObj);
   
 }
}
