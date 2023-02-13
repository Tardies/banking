import { Component, OnInit } from '@angular/core';
import { Account } from './account/account';
import { AccountServiceService } from './account/account-service.service';
import { AppServiceService } from './appService/app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'OurBank';
  accounts: Account[] = [];

  indicator:boolean = false;

  login() {
    this.indicator == false? this.indicator = true: this.indicator = false;
  }

  getName() {
    return this.accounts[0].name;
  }

  constructor(private accountService: AccountServiceService, appServiceService: AppServiceService) { 
    appServiceService.functioCall$.subscribe(() => {
      this.login();
    });
  }
  
  ngOnInit(): void {
    this.accountService.findAll().subscribe(data => {
      this.accounts = data;
    });
  }
}
