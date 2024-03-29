import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
        selector: 'app-reactive-form',
        templateUrl: './reactive-form.component.html',
        styleUrls: ['./reactive-form.component.css']
})
    export class ReactiveFormComponent implements OnInit {
    RegistrainForm:FormGroup;
    constructor(private fb:FormBuilder) {
    this.RegistrainForm=this.fb.group({


    'firstName':['',[Validators.required, Validators.minLength(4),Validators.pattern('[a-z]',)]],
    'lastName':['',[Validators.required, Validators.minLength(4),Validators.pattern('[a-z]')]],
    'mobile':['',[Validators.required,Validators.pattern('[0-9]')]],
})
}

    showData(){
    let formData=this.RegistrainForm.getRawValue();
    console.log(formData);
}
    ngOnInit() {
}

}
