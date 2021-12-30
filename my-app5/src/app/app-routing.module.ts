import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DataComponent } from './data/data.component';
import { HomeComponent } from './home/home.component';
import { HouseListComponent } from './house-list/house-list.component';
import { HousesComponent } from './houses/houses.component';
import { WizardListComponent } from './wizard-list/wizard-list.component';

const routes: Routes = [
  { path: 'wizard-Data', component: DataComponent , canActivate:[AuthGuard]},
  { path: 'wizard-list', component: WizardListComponent },
  {path:'Home', component:HomeComponent},
  {path:'Houses',component:HousesComponent},
  {path:'House_list', component:HouseListComponent},
  { path: '',   redirectTo: '/Home', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
