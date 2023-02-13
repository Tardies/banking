import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { History } from './history';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private historyUrl:string;

  constructor(private http: HttpClient) { 
    this.historyUrl = 'http://localhost:8080/history';
  }

  public findAll():Observable<History[]> {
    return this.http.get<History[]>(this.historyUrl);
  }
  
}
