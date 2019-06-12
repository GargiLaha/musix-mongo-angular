import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MuzixServiceService } from '../muzix-service.service';
import { ɵNAMESPACE_URIS } from '@angular/platform-browser';

@Component({
  selector: 'app-details-music',
  templateUrl: './details-music.component.html',
  styleUrls: ['./details-music.component.css']
})
export class DetailsMusicComponent implements OnInit {

  constructor(private router:Router, private musicService:MuzixServiceService, private route:ActivatedRoute) { }
public details: any;
// public musics: any [];
  ngOnInit() {
    this.musicDetails();
  }
musicDetails()
{
  const name=this.route.snapshot.paramMap.get('music');
  const artist=this.route.snapshot.paramMap.get('artist');

  console.log("Inside details : "+name,artist);
this.musicService.detailsMusic(name,artist).subscribe( data => {

  console.log(data);

  this.details = data;

});
}
}
