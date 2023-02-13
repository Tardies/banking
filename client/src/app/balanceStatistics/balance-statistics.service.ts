import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BalanceStatistics } from './balance-statistics';

@Injectable({
  providedIn: 'root'
})
export class BalanceStatisticsService {
  private balanceUrl: string;

  constructor(private http: HttpClient) { 
    this.balanceUrl = 'http://localhost:8080/balance';
  }

  public findAll():Observable<BalanceStatistics[]> {
    return this.http.get<BalanceStatistics[]>(this.balanceUrl);
  }
}
