import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WizardListComponent } from './wizard-list/wizard-list.component';
import { DataComponent } from './data/data.component';
import { HomeComponent } from './home/home.component';
import { HousesComponent } from './houses/houses.component';
import { HouseListComponent } from './house-list/house-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WizardListComponent,
    DataComponent,
    HomeComponent,
    HousesComponent,
    HouseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
