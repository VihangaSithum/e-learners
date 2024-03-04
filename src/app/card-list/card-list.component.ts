import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { Learners } from '../models/interfaces';
import { SharedDataService } from 'src/services/shared-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  isPopupOpen: boolean = false;

  organizationId = 0;


  submitForm() {

    console.log(this.formData)

    this.sharedDataService.currentCardList.subscribe(cardList => {
      this.cardList = cardList;
    });
    console.log(this.cardList[0].personal_trainer)

    this.dataService.postData(
      this.cardList[0].vehicle_category,
      this.cardList[0].service_type,
      this.cardList[0].price_range,
      this.cardList[0].personal_trainer,
      this.formData.number,
      this.formData.name,
      this.formData.email,
      this.organizationId).subscribe();

  }

  openForm(id: number) {
    this.organizationId = id;
    this.isPopupOpen = true;
  }

  closePopup() {
    this.isPopupOpen = false;
  }

  public cardList: Learners[] = [];

  public district = "";
  public serviceType = "";
  public personalTrainer = "false";
  public priceRange = "";

  constructor(
    private dataService: DataService,
    private sharedDataService: SharedDataService) {
  }

  public ngOnInit(): void {
    this.sharedDataService.currentCardList.subscribe(cardList => {
      this.cardList = cardList;
    });

  }

  formData = {
    number: '',
    name: '',
    email: ''
  };

}
