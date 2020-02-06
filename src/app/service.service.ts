import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  howServiceWork(){
    return "This is how service Work";
  }

  biodata(){
      return[
        { "name":"Satendra", "Class":"BSc", "roll":51 },
        // { "name":"Atun", "Class":"MSc",  "roll":52 },
        // { "name":"Ajaypal", "Class":"Btech", "roll":53 },
        // { "name":"Vijaypal", "Class":"Btech", "roll":54 },
        // { "name":"Vishwajeet", "Class":"Btech", "roll":55 },
        // { "name":"Gaurav", "Class":"Btech", "roll":56 },
        // { "name":"Vrun", "Class":"Btech", "roll":56 },
        // { "name":"Rajkumar", "Class":"Bsc", "roll":56 },
        // { "name":"Hitesh", "Class":"MCA", "roll":56 },
        // { "name":"Deepak", "Class":"BCA", "roll":56 },
        // { "name":"Lakhan", "Class":"Btech", "roll":56 },
        // { "name":"Vishnu", "Class":"MCA", "roll":56 },
        // { "name":"Bahu", "Class":"BCA", "roll":56 },

      ]
  }

}
