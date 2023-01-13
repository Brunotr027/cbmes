import { map } from 'rxjs/operators';
import { environment } from './../../enviroments/enviroment';
import { Folks } from './../folks';
import { count, filter, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoChartService {
  constructor(private http: HttpClient) { }
  chartData: Folks[] = [];
  labelData: Folks[] = [];

  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}Pessoal`;

  getInfoChart(): Observable<Folks[]> {
    return this.http.get<Folks[]>(this.apiUrl);
  }

  getData() {
    //@ts-ignore
    this.getInfoChart().subscribe(result => {
      this.chartData = result;
      if(this.chartData) {
        for(let i = 0; i < this.chartData.length; i++) {
        //@ts-ignore
          this.labelData.push(this.chartData[i].role);
        }
      }
    });
  }

  public labels(): string[] {
    //@ts-ignore
   return [...new Map(this.labelData.map(item => [item.toString(), item])).values()];
  }

  }
