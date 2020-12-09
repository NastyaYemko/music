import { ApiService } from './../api.service';
import { Track } from './../Track';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  tracks:  Track[] = [
    { name: '', artist: '', image: '', url: '' },
    { name: '', artist: '', image: '', url: '' },
    { name: '', artist: '', image: '', url: '' },
    { name: '', artist: '', image: '', url: '' },
    { name: '', artist: '', image: '', url: '' },
  ];


  constructor(private apiService: ApiService) { }


  ngOnInit(): void {
    this.showMusic()
  }

  showMusic() {
    this.apiService.showMusic()
    .subscribe((res: any) => {

      for(let i = 0; i<5; i++){
        this.tracks[i].name = res.tracks.track[i].name;
      this.tracks[i].artist = res.tracks.track[i].artist.name;
      res.tracks.track[i].image[0]["#text"] ? this.tracks[i].image = res.tracks.track[i].image[0]["#text"]
      : this.tracks[i].image = 'https://www.ferra.ru/thumb/1800x0/filters:quality(75):no_upscale()/imgs/2019/09/06/09/3549204/dba982c292613a03a31a77af53b5199b67b95ffc.jpg'
      this.tracks[i].url = res.tracks.track[i].url;
      }
    });
  }
}
