import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MuzixServiceService } from '../muzix-service.service';

@Component({
  selector: 'app-delete-track',
  templateUrl: './delete-track.component.html',
  styleUrls: ['./delete-track.component.css']
})
export class DeleteTrackComponent implements OnInit {

  constructor(private router:Router, private musicService:MuzixServiceService, private route:ActivatedRoute) { }
music:MuzixServiceService;
  ngOnInit() {
    this.deleteTrack();

}
deleteTrack():any{
  console.log("deleted");
  const id=this.route.snapshot.paramMap.get('music');
  console.log("deleted"+id);
  this.musicService.deleteTrack(id);
   this.router.navigateByUrl('/favs');

  
}
}