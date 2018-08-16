import { Component, OnInit } from '@angular/core';
import { Gifs } from '../gifs';
import { GifService } from '../gif.service'

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {

  gifs = [];
  //created an array to capture all dat being called by the url
  performSearch(searchTerm: HTMLInputElement): void {
    console.log('tries x:${searchTerm.value}')
  }

  constructor(public gifservice: GifService) {

    this.getGif();
  }
  getGif() {
    this.gifservice.getTrendingGifs().subscribe(data=> {
      // this.gifs = (data.data);//to return full array and assign it to variable gifs created above
      this.gifs = data["data"];
      console.log(this.gifs);
    });
  }
  ngOnInit() {


  }
}
