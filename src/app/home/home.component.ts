import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { SharedDataService } from 'src/services/shared-data.service';
import { Learners } from '../models/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  public district = "";
  public serviceType = "";
  public personalTrainer = "false";
  public priceRange = "";
  public cardList: Learners[] = [];

  constructor(
    private dataService: DataService,
    private sharedDataService: SharedDataService) {
  }

  ngOnInit(): void {
    this.dataService.fetchData(this.district, this.serviceType, this.personalTrainer, this.priceRange).subscribe(result => {
      this.sharedDataService.changeCardList(result.data);
      this.cardList = result.data;
      console.log(this.cardList)
    });
  }
  isPopupOpen: boolean = false;

  home(){}

  openPopup() {
    this.isPopupOpen = true;
  }

  closePopup() {
    this.isPopupOpen = false;
  }
}
