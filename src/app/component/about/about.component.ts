import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  username:string=" This Example"; //step 1 parent to child data

  constructor() { }

  ngOnInit() {
  }
public childMassege; //step 6 child to parent data 

}
