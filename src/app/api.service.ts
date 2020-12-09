import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY_LASTFM: string = '1eea5f2420b75c27bf93d3422d62191c'

  constructor(private http: HttpClient) { }

  searchMusic(musicName: string): Observable<Object> {
    return this.http.get(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${musicName}&api_key=${this.API_KEY_LASTFM}&format=json`)
  } 

  showMusic(): Observable<Object> {
    return this.http.get(`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${this.API_KEY_LASTFM}&format=json`);
  }
}
