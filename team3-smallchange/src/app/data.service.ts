import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

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
