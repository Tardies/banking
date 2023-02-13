import { Component, OnInit } from '@angular/core';
import { Account } from '../account/account';
import { AccountServiceService } from '../account/account-service.service';
import { HistoryService } from '../history/history.service';
import { History } from '../history/history';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit{
  transactions: History[] = [];

  accounts: Account[] = [];

  constructor(private accountService: AccountServiceService, private historyService: HistoryService) { 
  }
  
  ngOnInit(): void {
    this.accountService.findAll().subscribe(data => {
      this.accounts = data;
    });

    this.historyService.findAll().subscribe(data => {
      this.transactions = data;
    })
  }

  balance() {
    return this.accounts[0].amount;
  }
}
