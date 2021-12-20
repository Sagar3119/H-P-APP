import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-wizard-list',
  templateUrl: './wizard-list.component.html',
  styleUrls: ['./wizard-list.component.css']
})
export class WizardListComponent implements OnInit {
  data:any = [];
  data_of_single_wizard:string="";

 constructor(
    private dataservice: DataService
  ) { }  

 ngOnInit(): void {
    this.dataservice.getWizard().subscribe(
     (response:any) => { 
       this.data = response
       console.log(response);
       this.data.forEach((element: any) => {
        this.data_of_single_wizard=element;
        });
     } 
    );
   
   //array1.forEach(element => console.log(element));

}
}
