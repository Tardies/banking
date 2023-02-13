import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgModel } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AccountServiceService } from './account/account-service.service';
import { HistoryService } from './history/history.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BalanceComponent } from './balance/balance.component';
import { GraphComponent } from './graph/graph.component';
import { TransferComponent } from './transfer/transfer.component';
import { BalanceStatisticsService } from './balanceStatistics/balance-statistics.service';
import { LoginComponent } from './login/login.component';
import { ComeService } from './comeStatistics/come.service';

@NgModule({
  declarations: [
    AppComponent,
    BalanceComponent,
    GraphComponent,
    TransferComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AccountServiceService, HistoryService, BalanceStatisticsService, ComeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
