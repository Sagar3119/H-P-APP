import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { WizardListComponent } from './wizard-list/wizard-list.component';

const routes: Routes = [
  { path: 'wizard-Data', component: DataComponent },
  { path: 'wizard-list', component: WizardListComponent },
  { path: '',   redirectTo: '/wizard-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
