import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from "rxjs/operators";

interface SerachBody {
    "district": string,
    "service_type": string,
    "personal_trainer": boolean,
    "price_range": number
}


@Injectable()
export class DataService extends BehaviorSubject<any[]> {
    constructor(private http: HttpClient) {
        super([]);
    }
    public envUrl = `https://api.staging-trainme.thinkspace.bio/api`

    searchBody: SerachBody = {
        "district": "Colombo",
        "service_type": "get_new_license",
        "personal_trainer": false,
        "price_range": 20000 - 30000
    }

    //get districts
    public fetchDist(): Observable<any> {

        return this.http.get(`${this.envUrl}/districts`).pipe(
            map(response => (response as Array<any>)));
    }

    //post contact details
    public postData(vehicle_category: string, service_type: string, price_range: string, mobile_no: string, name: string, email: string, organization_id: number): Observable<any> {

        return this.http.post(`${this.envUrl}/leads`, { vehicle_category,service_type, price_range, mobile_no,  name, email,  organization_id }).pipe(
            map(response => (response as Array<any>)));
    }

    //load data 
    public fetchData1(): Observable<any> {

        return this.http.get(`${this.envUrl}/organizations`).pipe(
            map(response => (response as Array<any>)));
    }

    public fetchData(district: string, serviceType: string, personalTrainer: string, priceRange: string): Observable<any> {
        // Construct the query parameters
        let params = new HttpParams()
            .set('district', district)
            .set('service_type', serviceType)
            .set('personal_trainer', personalTrainer.toString())
            .set('price_range', priceRange);

        // Make the API call with query parameters
        return this.http.get(`${this.envUrl}/organizations`, { params }).pipe(
            map(response => response as any[])
        );
    }

}