import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SummaryCardsComponent } from '../summary-cards/summary-cards.component';
import { ChartsComponent } from '../charts/charts.component';
import { CommonModule } from '@angular/common';
import { ChartDataService } from '../chart-data.service';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,HeaderComponent, SummaryCardsComponent, ChartsComponent],
  
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  chartData: any;
  selectedResult : any;
  constructor(private chartDataService: ChartDataService) {}
  client = {
    activeIntegrations: ['Jira', 'Bitbucket, Github, Azure, Harvest, ClickUp, Airtable, Bigtime']
  };

  handleYearChange(year: number) {
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
