
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Career } from './career.model';
import { environment } from '../../environments/environment';
import { catchError, delay, shareReplay, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CareerService  {
  
  private baseUrl = environment.apiCareerUrl;




  constructor(private httpClient: HttpClient) { 
    this.initCareers();
  }

  careers$:Observable<Career[]>;


  initCareers()
  {
    this.careers$ =
    this.httpClient.get<Career[]>(this.baseUrl)
    .pipe(
      delay(2000),
      tap(console.table),
      shareReplay()
    );
   
  }
}

