import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
 

  constructor(private http: HttpClient ,private router:Router) {}



  logout(){
    localStorage.clear();
    this.router.navigateByUrl('')
  }

  getToken(): boolean {
    if (localStorage.getItem('userEmail')) {
      return true;
    } else {
      return false;
    }
  }
}