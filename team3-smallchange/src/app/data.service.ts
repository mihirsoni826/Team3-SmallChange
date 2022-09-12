import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dropDown$ = new BehaviorSubject<any>({});
  selectedDropDown$ = this.dropDown$.asObservable();
  dropdownValue: string = '';

  constructor(private http: HttpClient) { 
    this.dropDown$.next('Select Type of Account');
  }
  getDropDownValue(value: any) {
    this.dropDown$.next(value);
  }

  getTradeHistory(): Observable<any>{
    return this.http.get<any>('../assets/tradehistory.json')
  }

  getBrokeragePortfolio() : Observable<any> {
    return this.http.get<any>('../assets/brokerage-portfolio.json');
  }

  getLoginCred(): Observable<any>{
    return this.http.get<any>('../assets/users.json')
  }
}
