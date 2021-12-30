import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  data_of_wizard:any= null
 constructor(
   private dataService:DataService,
   private route:Router) 
  { }
  


  ngOnInit(): void {
  this.data_of_wizard = this.dataService.activeWizard
  }
  onClickGoBack() {
    this.route.navigateByUrl('/wizard-list');
  }
}
