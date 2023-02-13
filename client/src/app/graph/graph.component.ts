import { Component, OnInit } from '@angular/core';
import { Chart, Colors } from 'chart.js/auto';
import { Come } from 'src/app/comeStatistics/come';
import { ComeService } from '../comeStatistics/come.service';
import { BalanceStatistics } from '../balanceStatistics/balance-statistics';
import { BalanceStatisticsService } from '../balanceStatistics/balance-statistics.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
})
export class GraphComponent implements OnInit{
  balance: BalanceStatistics[] = [];
  come: Come[] = [];

  constructor(private balanceService: BalanceStatisticsService, private comeService: ComeService) { }


  ngOnInit() {
    this.balanceService.findAll().subscribe(data => {
      this.balance = data;
    });
    this.comeService.findAll().subscribe(data => {
      this.come = data;
    });

    let arrBalance:number[] = [1200.0, 1500.0, 2000.0, 700.0, 900.0, 1240.0, 1488.0];
    let arrCome:number[] = [+1200, +300, +500, -1300, +300, +340, +248];

    setTimeout(() => {
      var myChart = new Chart('ctx', {
        type: 'bar',
        data: {
          labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          datasets: [{
            data: arrBalance,
            borderWidth: 2,
            borderColor: 'white',
            backgroundColor: 'white',
          }]
        },
        options: {
          scales: {
            x: {
              suggestedMin: 20,
              ticks: { color: 'white'},
              grid: {
                color: 'white'
              }
            },
            y: {
              ticks: { color: 'white'},
              grid: {
                color: 'white'
              }
            },
          }
        }
        
      });
      var myCharts = new Chart('cts', {
        type: 'bar',
        data: {
          labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          datasets: [{
            data: arrCome,
            borderWidth: 2,
            borderColor: 'white',
            backgroundColor: 'white',
            
          }]
        },
        options: {
          scales: {
            x: {
              suggestedMin: 20,
              ticks: { color: 'white'},
              
              grid: {
                color: 'white'
              }
            },
            y: {
              ticks: { color: 'white'},
              grid: {
                color: 'white'
              }
            }
          },
        }
      });
    });
  }
}
