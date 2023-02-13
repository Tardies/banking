import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from './account';


@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {
  private accountUrl: string;

  constructor(private http: HttpClient) { 
    this.accountUrl = 'http://localhost:8080/account';
  }

  public findAll():Observable<Account[]> {
    return this.http.get<Account[]>(this.accountUrl);
  }

  public save(account: Account) {
    return this.http.post<Account>(this.accountUrl, account);
  }
}
