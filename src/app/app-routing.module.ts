import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPageComponent } from './view-page/view-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },

      {
        path: 'home',
        loadChildren: () => import('./home/home-routing.module').then(m => m.HomeRoutingModule),
      }

    ]
  },

  {
    path: '',
    component: ViewPageComponent,
    children: [
      {
        path: '',
        redirectTo: '/search',
        pathMatch: 'full'
      },

      {
        path: 'search',
        loadChildren: () => import('./view-page/view-page-routing.module').then(m => m.ViewPageRoutingModule),
      }

    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
