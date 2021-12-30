import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
  house_names: string[] = ["gryffindor","ravenclaw","hufflepuff","slytherin"];
 
  constructor(private router: Router,
    private dataservice: DataService) { }
  
  ngOnInit(): void {
  }
  onClick(char: string){
    this.dataservice.active_house=char;
    this.router.navigateByUrl('/House_list');
     }
}
