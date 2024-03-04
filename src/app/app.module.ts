import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewPageComponent } from './view-page/view-page.component';
import { ViewPageModule } from './view-page/view-page.module';
import { DataService } from 'src/services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { CardListComponent } from './card-list/card-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ReviewsComponent } from './reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewPageComponent,
    CardListComponent,
    FormComponent,
    ReviewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewPageModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
