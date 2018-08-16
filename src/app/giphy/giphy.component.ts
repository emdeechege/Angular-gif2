import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Gifs} from '../gifs'

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {

performSearch(searchTerm:HTMLInputElement): void{
  console.log('tries x:${searchTerm.value}')
}

  constructor(private http:HttpClient) { }

  ngOnInit() {
  

    this.http.get("https://api.giphy.com/v1/gifs/trending?api_key=SXcUYUeKYmkLK6ZqdjBAeG7QoZg7LLG5").subscribe(data=>{
        // Successful API request.
  })
}
}
