import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
  house_names: any[] = ["gryffindor","ravenclaw","hufflepuff","slytherin"];
  // house_names = [
  //   {
  //     name: "gryffindor",
  //     image: "gryffindor_flag"
  //   },
  //   {
  //     name: "ravenclaw",
  //     image: "ravenclaw_flag"
  //   },
  //   {
  //     name: "hufflepuff",
  //     image: "hufflepuff_flag"
  //   },
  //   {
  //     name: "slytherin",
  //     image: "slytherin_flag"
  //   }
  // ];
 
  constructor(private router: Router,
    private dataservice: DataService) { }
  
  ngOnInit(): void {
  }
  onClick(char: string){
    // this.dataservice.active_house=char;
    this.router.navigate(['/House_list', char]);
     }
}
