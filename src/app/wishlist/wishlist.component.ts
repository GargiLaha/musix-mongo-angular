import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { MuzixServiceService } from '../muzix-service.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(private router:Router, private musixService:MuzixServiceService,private route : ActivatedRoute) { }
musics:any =[];
  ngOnInit() {
  this.musixService.displayWishlist().subscribe(data=>
    {
    this.musics=data;
  });
}
deleteMusic(music):any{
  console.log(music);
  var id=music.trackId;
  this.router.navigateByUrl('deleted/'+id);
}
public detailMusic(value):any {

  console.log('details/'+value.trackName+'/'+value.comment);
  this.router.navigateByUrl('details/'+value.trackName+'/'+value.comment);
}

}

