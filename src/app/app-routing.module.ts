import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CapitalContainerComponent } from './capital-container/capital-container.component';
import { CapitalDetailsComponent } from './capital-container/capital-details/capital-details.component';
import { CapitalFormComponent } from './capital-container/capital-form/capital-form.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  {path:"", component: CapitalContainerComponent,
  children: [
    {path:"new", component: CapitalFormComponent},
    {path:":index/edit", component: CapitalFormComponent},
    {path:":index", component: CapitalDetailsComponent},
    {path: "", redirectTo: "0", pathMatch: "full"} 
  ]},
  {path:"map", component: MapComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
