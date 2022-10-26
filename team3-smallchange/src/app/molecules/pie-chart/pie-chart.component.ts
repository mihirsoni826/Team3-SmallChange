import { Component, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { ApexOptions, ApexPlotOptions, ApexTooltip } from "ng-apexcharts";
import {
    ApexNonAxisChartSeries,
    ApexChart,
    ApexFill,
    ApexDataLabels,
    ApexLegend
  } from "ng-apexcharts";
import { Color, Colors } from 'ng2-charts';

  export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    options: ApexOptions;
    plotOptions: ApexPlotOptions;
    labels: any;
    fill: ApexFill;
    tooltip: ApexTooltip;
    legend: ApexLegend;
    dataLabels: ApexDataLabels;
    colors: any[];
  };

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnChanges {

  public chartOptions: Partial<ChartOptions>;
  @Input() chartData = [];
  @Input() labels = [];
  @Input() innerLabel = '';
  
  total: number;
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.chartOptions = {
      chart: {
        width: 380,
        height: 200,
        type: "donut",
        
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          offsetX: 0,
          offsetY: 0,
          customScale: 1,
          dataLabels: {
              offset: 0,
              minAngleToShowLabel: 10
          }, 
          donut: {
            size: '65%',
            background: 'transparent',
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: '22px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 600,
                color: undefined,
                offsetY: 0,
                formatter: function (val) {
                  return val;
                }
              },
              value: {
                show: false,
                fontSize: '16px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                color: "#000000",
                offsetY: 16,
                formatter: function (val) {
                  return val
                }
              },
              total: {
                show: true,
                showAlways: true,
                label: this.innerLabel,
                fontSize: '16px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 500,
                color: '#373d3f',
                formatter: function (w) {
                  return w.globals.seriesTotals.reduce((a, b) => {
                    return a + b
                  }, 0)
                }
              }
            }
          },      
        }
      },
      dataLabels: {
         enabled: false
      },
      series: this.chartData,
      labels: this.labels,
      //colors: ['#DFFF00', '#FFBF00', '#FF7F50', '#DE3163', '#9FE2BF', '#000000'],
      fill: {
        type: "gradient"
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: function(val) {
            return "$" + val;
          },
          title: {
            formatter: function (seriesName) {
              return seriesName
            }
          }
        }
      },
      legend: {
        show: true,
        showForSingleSeries: false,
        showForNullSeries: true,
        showForZeroSeries: true,
        position: 'right',
        horizontalAlign: 'center', 
        floating: false,
        fontSize: '12px',
        fontFamily: 'Helvetica, Arial',
        fontWeight: 400,
        inverseOrder: false,
        width: undefined,
        height: undefined,
        tooltipHoverFormatter: undefined,
        offsetX: 0,
        offsetY: 0,
        labels: {
            colors: undefined,
            useSeriesColors: false
        },
        markers: {
            width: 12,
            height: 12,
            strokeWidth: 0,
            strokeColor: '#fff',
            fillColors: undefined,
            radius: 12,
            customHTML: undefined,
            onClick: undefined,
            offsetX: 0,
            offsetY: 0
        },
        itemMargin: {
            horizontal: 5,
            vertical: 0
        },
        onItemClick: {
            toggleDataSeries: true
        },
        onItemHover: {
            highlightDataSeries: true
        },
        formatter: function(val, opts) {
          const total = opts.w.globals.series.reduce((a, b) => {
            return a+b;
          }, 0);

          const percent = ((opts.w.globals.series[opts.seriesIndex] / total) * 100).toFixed(2) ;
          return val + " " + percent + '%';
        },
      },
    };
  }
}
