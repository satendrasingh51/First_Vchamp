import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  showvalue(fname){
    console.log(fname);
  }
  constructor() { }

  ngOnInit() {
  }


}
