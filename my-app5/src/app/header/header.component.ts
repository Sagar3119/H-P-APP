import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
      characters:any=[];
  constructor( private dataservice:DataService,
    private router:Router)
     { }

  ngOnInit(): void {
    this.dataservice.getWizard().subscribe(
      (Response:any) =>{
        this.characters = Response
      } 
    );
  }
  onClick(character: any )
  {
    this.dataservice.activeWizard = character;
    this.router.navigateByUrl('/wizard-data')
  }

}
