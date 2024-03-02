import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Learners } from 'src/app/models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private cardListSource = new BehaviorSubject<Learners[]>([]);
  currentCardList = this.cardListSource.asObservable();

  constructor() { }

  changeCardList(cardList: Learners[]) {
    this.cardListSource.next(cardList);
  }

  changeCardListToEmpty() {
    this.cardListSource.next([]);
  }
}