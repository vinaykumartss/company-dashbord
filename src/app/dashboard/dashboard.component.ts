import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SummaryCardsComponent } from '../summary-cards/summary-cards.component';
import { ChartsComponent } from '../charts/charts.component';
import { CommonModule } from '@angular/common';
import { ChartDataService } from '../chart-data.service';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, HeaderComponent, SummaryCardsComponent, ChartsComponent],

  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  chartData: any;
  selectedResult: any;
  selectedYear : number=2023;
  constructor(private chartDataService: ChartDataService) { }
  client = {
    activeIntegrations: ['Jira', 'Bitbucket, Github, Azure, Harvest, ClickUp, Airtable, Bigtime']
  };

  ngOnInit() {
    this.getDummyData(this.selectedYear);
  }
  handleYearChange(year: number) {
    this.getDummyData(year);
  }

  getDummyData(year: number): any {
    this.chartDataService.getChartData().subscribe(
      (data) => {
        this.chartData = data; // Assign the received data to chartData
        this.selectedResult = this.chartData[year];
        console.log('Chart data received:', this.selectedResult);
      },
      (error) => {
        console.error('Error fetching chart data:', error); // Handle any errors that occur during the request
      }
    );
  }
}
