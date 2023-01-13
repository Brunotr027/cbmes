import { Folks } from './../../../folks';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { InfoChartService } from './../../../services/info-chart.service';

Chart.register(...registerables);

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  @ViewChild("myChart", { static: true }) elemento!: ElementRef;

  constructor(private infoChartService: InfoChartService) { }

  ngOnInit(): void {
    this.infoChartService.getData();
    console.log(this.infoChartService.labels());
    this.renderChart();
  }

  public labels() {
    this.infoChartService.getInfoChart().subscribe(data => {
      [...new Map(data.map(item => [item.role, item])).values()];
    })
  }

  renderChart(){

   new Chart('myChart', {
      type: 'doughnut',
      data: {
          labels: ['Militares', 'Civis', 'Estágiarios'],
          datasets: [{
              label: '',
              data: [60, 30, 10],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
              ],
              hoverOffset: 6
          }]
      },

  });
}

}
