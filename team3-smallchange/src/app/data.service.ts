import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { AuthService } from './services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private authService : AuthService) {}

  // getTradeHistory(): Observable<any>{
  //   return this.http.get<any>('../assets/tradehistory.json')
  // }
  userEmail: String;
  userName: String;

  getPortfolioDataFromApi(): Observable<any> {
    this.userEmail  = localStorage.getItem('userEmail')
    const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type': 'application/json',
       }),
     };

    const user_data = {email: this.userEmail};
    const body = JSON.stringify(user_data);
 
    return this.http.post("http://localhost:8080/portfolio/",body,httpOptions);

   }

  getLoginCred(): Observable<any>{
    return this.http.get<any>('../assets/users.json')
  }
}
