// heart-stats.component.ts
import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-heart-stats',
  templateUrl: './heart-stats.component.html',
  styleUrls: ['./heart-stats.component.css']
})
export class HeartStatsComponent implements AfterViewInit {
  @ViewChild('lineChart', { static: true }) private chartRef!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    this.createLineChart();
  }

  createLineChart() {
    const ctx = this.chartRef.nativeElement.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [
          {
            label: 'Heart Anomaly Deaths',
            data: [5000, 5300, 5500, 5700, 5900, 6100, 6300, 6500, 6700, 6900, 7100],
            borderColor: '#FF6384',
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Deaths due to Heart Anomalies',
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }
}
