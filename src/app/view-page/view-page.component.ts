import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { Learners } from '../models/interfaces';
import { SharedDataService } from 'src/services/shared-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.css']
})
export class ViewPageComponent implements OnInit {

  public submit() {
    // this.dataService.updateById(idof learners)
  }

  // private currentPage = 0;
  public cardList: Learners[] = [];

  public district = "";
  public serviceType = "";
  public personalTrainer = "false";
  public priceRange = "";
  isPopupOpen: boolean = false;
  count = 0;

  

  constructor(
    private router: Router,
    private dataService: DataService,
    private sharedDataService: SharedDataService) {
  }

  public ngOnInit(): void {
    this.sharedDataService.currentCardList.subscribe(cardList => {
      this.cardList = cardList;
      this.count = cardList.length;
    });
    if (this.cardList == null){
      this.count = 0;
    }
    
  }

  home(){
    this.router.navigate(['/home']);
  }

  openPopup() {
    this.isPopupOpen = true;
  }

  closePopup() {
    this.isPopupOpen = false;
  }

}
