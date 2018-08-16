import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Gifs} from '../gifs';
import{GifService} from '../gif.service'

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {
public gifs= [];
//created an array to capture all dat being called by the url
performSearch(searchTerm:HTMLInputElement): void{
  console.log('tries x:${searchTerm.value}')
}

  constructor(public gifservice: GifService, public http:HttpClient) {
  this.getGif();
}
public getGif(){
  this.gifservice.getTrendingGifs().subscribe((data:Gifs)=>{
    this.gifs=(data.data);//to return full array and assign it to variable gifs created above
    console.log(this.gifs);
  });
}
  ngOnInit() {


    // this.http.get("https://api.giphy.com/v1/gifs/trending?api_key=SXcUYUeKYmkLK6ZqdjBAeG7QoZg7LLG5").subscribe(data=>{
    //     // Successful API request.
  }
}
