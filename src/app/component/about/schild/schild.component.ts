import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// step 3 parent to data import  input  &
// condition in child to parent step 1  import output, eventemitter 

@Component({
  selector: 'app-schild',
  templateUrl: './schild.component.html',
  styleUrls: ['./schild.component.css']
})
export class SchildComponent implements OnInit {

  @Input() uname:string;// step 4 parent to child data

  @Output() 
  public childData = new EventEmitter();//step 2 child to parent

  
  constructor() { }

  ngOnInit() {
  }
      satendra(){   /// step 4 child to parent data 
        this.childData.emit(" Delectus alias ut incidunt delectus nam placeat in consequatur. Sed cupiditate quia ea quis. Voluptas nemo qui aut distinctio. Cumque fugit earum est quam officiis numquam.<br> Ducimus corporis autem at blanditiis beatae incidunt sunt.");
      }

}
