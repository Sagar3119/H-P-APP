import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getWizard() {
  return this.http.get('http://hp-api.herokuapp.com/api/characters');
  }
}
