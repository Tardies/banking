import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Come } from './come';

@Injectable({
  providedIn: 'root'
})
export class ComeService {
  private comeUrl: string;

  constructor(private http: HttpClient) {
    this.comeUrl = 'http://localhost:8080/come';
   }
  
  public findAll():Observable<Come[]> {
    return this.http.get<Come[]>(this.comeUrl);
  }
}
