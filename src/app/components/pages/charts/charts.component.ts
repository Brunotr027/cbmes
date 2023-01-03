import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  @ViewChild("myChart", { static: true }) elemento!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.renderChart();
  }

  renderChart(){
    new Chart('myChart', {
      type: 'doughnut',
      data: {
          labels: ['Militares', 'Civis', 'Estágiarios'],
          datasets: [{
              label: 'My First Dataset',
              data: [60, 30, 10],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
              ],
              hoverOffset: 4
          }]
      },

  });
}
}
