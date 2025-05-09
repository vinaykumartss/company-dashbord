// In your chart-data.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {
  constructor(private http: HttpClient) {}

  getChartData(): Observable<any> {
    return this.http.get('/assets/data/chart-data.json');
  }
}
