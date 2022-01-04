import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-wizard-list',
  templateUrl: './wizard-list.component.html',
  styleUrls: ['./wizard-list.component.css']
})
export class WizardListComponent implements OnInit {
  //private _characters: any = [];
  data:any = [];
  data_of_single_wizard:string="";


 constructor(
    private dataservice: DataService,
    private router: Router
  ) { }  


 ngOnInit(): void {
    this.dataservice.getWizard().subscribe(
     (response:any) => { 
       this.data = response
        });
     } 
     
     onClick(character:any) {
      this.dataservice.activeWizard=character;
      this.router.navigateByUrl('/wizard-Data')
      console.log(this.dataservice.activeWizard);
      }
    }

