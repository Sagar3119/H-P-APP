import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public activeWizard: any = null
  public active_house: any = null;
  public get getActiveWizard() : any {
    return this.activeWizard
  }
  
  public set setActiveWizard(v:any)
  {
    this.activeWizard=v;
  }
  constructor(
    private http: HttpClient
  ) { }

  getWizard() {
  return this.http.get('http://hp-api.herokuapp.com/api/characters');
  }
  getWizardByHouse(house:string) {
    if(house=="gryffindor")
    return this.http.get('http://hp-api.herokuapp.com/api/characters/house/gryffindor');
    if(house=="ravenclaw")
    return this.http.get('http://hp-api.herokuapp.com/api/characters/house/ravenclaw');
    if(house=="hufflepuff")
    return this.http.get('http://hp-api.herokuapp.com/api/characters/house/hufflepuff');
    if(house=="slytherin")
    return this.http.get('http://hp-api.herokuapp.com/api/characters/house/slytherin');
    return this.http.get('http://hp-api.herokuapp.com/api/characters');
  }
}
