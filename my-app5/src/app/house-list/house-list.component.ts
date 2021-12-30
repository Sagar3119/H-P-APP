import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {

  data:any = [];
  constructor(
    private dataservice: DataService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.dataservice.getWizardByHouse(this.dataservice.active_house).subscribe(
      (response:any) => {
        this.data = response ;
      }
     );
     
  }
  onClick(character:any) {
    this.dataservice.activeWizard=character;
    this.router.navigateByUrl('/wizard-Data')
    console.log(this.dataservice.activeWizard);
    }
  }
