import { Track } from './../Track';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-music',
  templateUrl: './search-music.component.html',
  styleUrls: ['./search-music.component.css']
})
export class SearchMusicComponent implements OnInit {

  searchStr: string;
  searchResult: boolean;
  
  tracks: Track[] = [
    { name: '', artist: '', image: '', url: '' },
    { name: '', artist: '', image: '', url: '' },
    { name: '', artist: '', image: '', url: '' },
    { name: '', artist: '', image: '', url: '' },
    { name: '', artist: '', image: '', url: '' },
  ];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  searchMusic() {
    this.searchResult = true
    this.apiService.searchMusic(this.searchStr).subscribe((res: any) => {
      console.log(res);
      
console.log(res.results.trackmatches.track);

      for(let i = 0; i<5; i++){
        this.tracks[i].name = res.results.trackmatches.track[i].name;
      this.tracks[i].artist = res.results.trackmatches.track[i].artist;
      res.results.trackmatches.track[i].image[0]["#text"] ? this.tracks[i].image = res.results.trackmatches.track[i].image[0]["#text"]
      : this.tracks[i].image = 'https://www.ferra.ru/thumb/1800x0/filters:quality(75):no_upscale()/imgs/2019/09/06/09/3549204/dba982c292613a03a31a77af53b5199b67b95ffc.jpg'
      this.tracks[i].url = res.results.trackmatches.track[i].url;
      }
    });
    
  }

  reset() {
    this.searchStr = null;
    this.searchResult = false;
  }

}
