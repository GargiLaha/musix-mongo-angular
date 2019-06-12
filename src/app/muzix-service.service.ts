import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MuzixServiceService {

  constructor(private http:HttpClient) { }

  getTrendMusic():any {
    return this.http.get("http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=d7bc38454df0d0d6d83a09ceada9510b&format=json");
  }
  getMusic(value):any {
    var url=`http://ws.audioscrobbler.com/2.0/?method=track.search&api_key=d7bc38454df0d0d6d83a09ceada9510b&track=${value}&format=json`;
    return this.http.get(url);
  }

  addtoWishlist(value){
   this.http.post("http://localhost:8087/api/v1/track",value, {responseType : "text"}).subscribe();
   console.log("inside service console"+value);
  }
  displayWishlist():any{
     return this.http.get("http://localhost:8087/api/v1/tracklist");
  }
  deleteTrack(value){
    return this.http.delete(`http://localhost:8087/api/v1/track/${value}`).subscribe();
  }
 detailsMusic(value1,value2){

  console.log("Inside service detail...");
  return this.http.get(`http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=d7bc38454df0d0d6d83a09ceada9510b&artist=${value1}&track=${value2}&format=json`);
 }
}

