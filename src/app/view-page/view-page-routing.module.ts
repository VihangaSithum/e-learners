import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPageComponent } from './view-page.component';

const routes: Routes = [
  {
    path: '',
    component: ViewPageComponent,
    children: [
      {
        path: 'search',
        component: ViewPageComponent,
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewPageRoutingModule {
  
 }
