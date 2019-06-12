import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { MuzixServiceService } from '../muzix-service.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  constructor(private router:RouterModule,private musicService:MuzixServiceService,private route:ActivatedRoute  ) { }

musics:MuzixServiceService [];

  ngOnInit() {
    this.getMusic();
  }

getMusic():any {
  const search = this.route.snapshot.paramMap.get('name');
  this.musicService.getMusic(search).subscribe(data => {

  console.log(data.results.trackmatches.track);
    this.musics=data.results.trackmatches.track;
  
});
}
}
