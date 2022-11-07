import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  // getTradeHistory(): Observable<any>{
  //   return this.http.get<any>('../assets/tradehistory.json')
  // }

  getBrokeragePortfolio() : Observable<any> {
    return this.http.get<any>('../assets/brokerage-portfolio.json');
  }

  getMFPortfolio() : Observable<any> {
    return this.http.get<any>('../assets/mutual-funds.json');
  }

  getPortfolioDataFromApi(): Observable<any> {
    const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type': 'application/json',
       }),
     };

    const user_data = {email: "123@gmail.com"};
    const body = JSON.stringify(user_data);
 
    return this.http.post("http://localhost:8080/portfolio/",body,httpOptions);

   }

  getLoginCred(): Observable<any>{
    return this.http.get<any>('../assets/users.json')
  }
}
