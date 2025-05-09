import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import {
  ChartOptions,
  ChartConfiguration
} from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss'
})
export class ChartsComponent implements OnInit {
  isBrowser: boolean;
  private _chartData: any = {};
  // Declare chart variables at class level
  public projectHoursChartData!: ChartConfiguration<'bar'>['data'];
  public horizontalBarChartOptions!: ChartOptions<'bar'>;

  public employeeTimesheetChartData!: ChartConfiguration<'bar'>['data'];
  public verticalBarChartOptions!: ChartOptions<'bar'>;

  public lineChartData!: ChartConfiguration<'line'>['data'];
  public lineChartOptions!: ChartConfiguration<'line'>['options'];

  public timeSheetBarData: any;
  public timeSheetBarOption!: ChartOptions;

  public employeeLineChartData!: ChartConfiguration<'line'>['data'];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.projectHoursChartData = {
        labels: ['Wallmart', 'Apple', 'Fedex', 'Jio', 'Tcs'],
        datasets: [{
          data: [350, 275, 220, 190, 165],
          label: 'Hours',
          backgroundColor: ['#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe', '#dbeafe'],
          borderRadius: 10,
          barThickness: 25,
        }]
      };

      this.horizontalBarChartOptions = {
        indexAxis: 'y',
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: tooltipItem => `Hours: ${tooltipItem.raw as number}`
            }
          }
        },
        scales: {
          x: {
            beginAtZero: true,
            grid: { color: '#f3f4f6' }
          },
          y: {
            ticks: { font: { size: 14 } },
            grid: { color: '#f3f4f6' }
          }
        }
      };

      this.employeeTimesheetChartData = {
        labels: ['Alice', 'Nova', 'Lio', 'Trump'],
        datasets: [
          {
            data: [95, 88, 82, 72],
            label: 'Tracked',
            backgroundColor: '#3b82f6',
            borderRadius: 8,
            barThickness: 30
          },
          {
            data: [75, 70, 68, 60],
            label: 'Expected',
            backgroundColor: '#d1d5db',
            borderRadius: 8,
            barThickness: 30
          }
        ]
      };

      this.verticalBarChartOptions = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            labels: { font: { size: 14 } }
          },
          tooltip: {
            callbacks: {
              label: context => `${context.dataset.label}: ${context.raw}`
            }
          }
        },
        scales: {
          x: {
            grid: { color: '#f3f4f6' },
            ticks: { font: { size: 14 } }
          },
          y: {
            beginAtZero: true,
            grid: { color: '#f3f4f6' },
            ticks: { stepSize: 10 }
          }
        }
      };

      this.lineChartData = {
        labels: ['Employee A', 'Employee B', 'Employee C', 'Employee D'],
        datasets: [
          {
            data: [11, 9, 7, 7],
            label: 'Tracked',
            fill: false,
            borderColor: '#3b82f6',
            tension: 0.4,
            pointBackgroundColor: '#3b82f6',
            pointBorderColor: '#3b82f6',
          },
          {
            data: [6, 5, 4, 4],
            label: 'Expected',
            fill: false,
            borderColor: '#9ca3af',
            tension: 0.4,
            pointBackgroundColor: '#9ca3af',
            pointBorderColor: '#9ca3af',
          }
        ]
      };

      this.timeSheetBarData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
          label: 'Timesheets Submitted',
          data: [45, 72, 55, 60, 80],
          borderColor: '#4caf50',
          backgroundColor: 'rgba(76, 175, 80, 0.2)',
          borderWidth: 2,
          fill: true,
        }]
      };

      this.timeSheetBarOption = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: { color: 'rgba(0, 0, 0, 0.1)' },
            ticks: { font: { size: 12 } }
          },
          y: {
            grid: { color: 'rgba(0, 0, 0, 0.1)' },
            ticks: { font: { size: 12 } }
          }
        },
        plugins: {
          legend: {
            position: 'top',
            labels: { font: { size: 14 } }
          },
          tooltip: {
            callbacks: {
              label: tooltipItem => `Timesheets: ${tooltipItem.raw}`
            }
          }
        }
      };

      this.employeeLineChartData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [
          {
            label: 'Employee A',
            data: [8, 7, 9, 6, 8],
            borderColor: '#3b82f6',
            tension: 0.4,
            fill: true,
            pointBackgroundColor: '#ef4444',
            pointRadius: 5,
            pointHoverRadius: 7,
          },
          {
            label: 'Employee B',
            data: [7, 8, 8, 7, 6],
            borderColor: '#10b981',
            tension: 0.4,
            fill: true,
            pointBackgroundColor: '#3b82f6',
            pointRadius: 5,
            pointHoverRadius: 7,
          }
        ]
      };

      this.lineChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              font: { size: 14 },
              color: '#374151',
            },
          },
          tooltip: {
            callbacks: {
              label: context => `${context.dataset.label}: ${context.raw} hours`,
            },
          },
        },
        scales: {
          y: {
            type: 'linear',
            ticks: {
              stepSize: 1,
              font: { size: 12 },
              color: '#4b5563',
            },
            grid: { color: '#e5e7eb' }
          },
          x: {
            type: 'category',
            ticks: {
              font: { size: 14 },
              color: '#4b5563',
            },
            grid: { color: '#e5e7eb' }
          }
        }
      };
    }
  }

  createGradient(ctx: CanvasRenderingContext2D, color: string): CanvasGradient {
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, color + '33');
    gradient.addColorStop(1, color + '05');
    return gradient;
  }
}
