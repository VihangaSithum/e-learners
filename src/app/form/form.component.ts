import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { DataService } from 'src/services/data.service';
import { SharedDataService } from 'src/services/shared-data.service';
import { Districts } from '../models/interfaces';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private router: Router,
    private sharedDataService: SharedDataService) {
  }

  vehicleCat: any[] = [];
  vehicleCat2: any[] = [];
  distList: any[] = [];

  settings: IDropdownSettings = {};

  formData = {
    serviceType: '',
    vehicleCategory: [],
    district: '',
    budget: '',
    personalTrainer: "false",
    licenseType: '',
    vehicleLight: "false"
  };

  submitForm() {
    if (this.formData.personalTrainer === "yes") {
      this.formData.personalTrainer = "true"
    } else {
      this.formData.personalTrainer = "false"
    }
    this.sharedDataService.changeCardListToEmpty();
    console.log(this.formData)

    this.dataService.fetchData(this.formData.district, this.formData.serviceType, this.formData.personalTrainer, this.formData.budget).subscribe(result => {
      const modifiedData = result.data.map((item: any) => {
        return {
          ...item, service_type: this.formData.serviceType,
          vehicle_category: this.formData.vehicleCategory,
          price_range: this.formData.budget,
          personal_trainer: this.formData.personalTrainer,
        };
      });

      this.sharedDataService.changeCardList(modifiedData);
    });

    const currentUrl = this.router.url;

    if (currentUrl === '/search') {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([currentUrl]);
      });
    } else {
      this.router.navigate(['/search']);
    }

  }

  ngOnInit(): void {
    this.vehicleCat = [
      { ID: 1, Value: 'A1' },
      { ID: 2, Value: 'A' },
      { ID: 3, Value: 'B1' },
      { ID: 4, Value: 'B' },
    ]
    this.vehicleCat2 = [
      { ID: 1, Value: 'C1' },
      { ID: 2, Value: 'C' },
      { ID: 3, Value: 'D1' },
      { ID: 4, Value: 'D' },
      { ID: 5, Value: 'CE' },
      { ID: 6, Value: 'DE' },
      { ID: 7, Value: 'G' },
      { ID: 8, Value: 'J' },
    ]
    this.settings = {
      idField: 'ID',
      textField: 'Value',
    };

    this.dataService.fetchDist().subscribe(result => {
      this.distList = <Districts[]>result.data;
    });

  }
}
