import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { MuzixServiceService } from '../muzix-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
musics:any [];
  constructor(private router: Router, private musixservice:MuzixServiceService, private route:ActivatedRoute) { }

  ngOnInit() {
   
  }


}
