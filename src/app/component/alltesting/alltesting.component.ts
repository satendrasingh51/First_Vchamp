import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
 


@Component({
  selector: 'app-alltesting',
  templateUrl: './alltesting.component.html',
  styleUrls: ['./alltesting.component.css']
})
export class AlltestingComponent implements OnInit {

 
  public data;

  public showbiodata=[];

  constructor( private ServiceService: ServiceService) { }

  ngOnInit() {

    this.data = this.ServiceService.howServiceWork();

    this.showbiodata = this.ServiceService.biodata();

  }
  education =['MCA','MBA','M.Tetch','P.hd']; //this is dropdown
  gender =['Male','Female'];//this is dropdown

  Cites = [//this is dropdown
          {id: 1, name: "Noida"},
          {id: 2, name: "bareilly"},
          {id: 3, name: "LuckNow"},
          {id: 4, name: "Ghaziabad"},

];

 



}
