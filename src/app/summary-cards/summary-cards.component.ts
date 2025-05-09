
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { NgChartsModule } from 'ng2-charts';
import { AfterViewInit, Component, ElementRef, Input, input, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';
@Component({
  selector: 'app-summary-cards',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './summary-cards.component.html',
  styleUrl: './summary-cards.component.scss'
})
export class SummaryCardsComponent implements AfterViewInit {
  private viewInitialized = false;

  private _summaryData: any = {};
  @ViewChild('overallCanvas') overallCanvas!: ElementRef;
  @ViewChild('timesheetCanvas') timesheetCanvas!: ElementRef;
  @ViewChild('projectsCanvas') projectsCanvas!: ElementRef;
  @Input()
  set summaryData(value: any) {
    
    this._summaryData = value;
    if (this.viewInitialized) {
      this.createOverallChart();
      this.createTimesheetChart();
      this.createProjectsChart();
    }
  }

  get summaryData(): any {
    return this._summaryData;
  }
  constructor() { }

  ngAfterViewInit(): void {
    this.viewInitialized = true;
    if (this._summaryData) {
      this.createOverallChart();
      this.createTimesheetChart();
      this.createProjectsChart();
    }
  }



  createOverallChart(): void {
    new Chart(this.overallCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: this._summaryData?.overall?.labels,
        datasets: [{
          data: this._summaryData?.overall?.data,
          backgroundColor: ['#36A2EB', '#E0E0E0']
        }]
      },
      options: {
        plugins: {
          legend: {
            display: true,
            labels: {
              color: '#333', // Legend text color
              font: {
                size: 10,
                weight: 'bold',
                family: 'Arial, sans-serif'
              },
              boxWidth: 6, // Size of the color box
              padding: 10 // Space between legend items
            }
          }
        },

        cutout: '85%'
      }
    });
  }

  createTimesheetChart(): void {
    new Chart(this.timesheetCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: this._summaryData?.timesheet?.labels,
        datasets: [{
          data: this._summaryData?.timesheet?.data,
          backgroundColor: ['#4BC0C0', '#E0E0E0']
        }]
      },
      options: {
        plugins: {
          legend: {
            display: true,
            labels: {
              color: '#333', // Legend text color
              font: {
                size: 10,
                weight: 'bold',
                family: 'Arial, sans-serif'
              },
              boxWidth: 6, // Size of the color box
              padding: 10 // Space between legend items
            }
          }
        },

        cutout: '85%'
      }
    });
  }

  createProjectsChart(): void {
    new Chart(this.projectsCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: this._summaryData?.projects?.labels,
        datasets: [{
          data: this._summaryData?.projects?.data,
          backgroundColor: ['#FF6384', '#FFCD56']
        }]
      },
      options: {
        plugins: {
          legend: {
            display: true
          }
        },
        cutout: '85%'
      }
    });
  }

}
