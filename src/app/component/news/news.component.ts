import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';//step 3 api

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  ResponData;
  news;
  //Step4 -Create a object in constructor 
    constructor( private http:HttpClient) { } //step 4 api



  ngOnInit() {

    //step5 api
const ApiUrl="https://newsapi.org/v2/everything?domains=wsj.com&apiKey=5ce2cd9ec498459e9657a38fd0279f15";
this.http.get(ApiUrl).subscribe(response=>{

  this.ResponData=response;
  this.news=this.ResponData.articles;
// step8 -- Get only specified Data ..like articles only
// this.ResponData=response;
// this.news=this.ResponData.articles;

//  Step6 -- get data All Data on console 
//console.log(response); 
//step 10 print only articles 
  console.log(this.news);
})
  }

}
