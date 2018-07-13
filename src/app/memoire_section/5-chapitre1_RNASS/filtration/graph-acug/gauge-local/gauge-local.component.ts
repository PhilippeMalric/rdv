import { Component, OnInit, Input } from '@angular/core';

import { AmChartsService } from 'amcharts3-angular2';

@Component({
  selector: 'app-gauge-local',
  templateUrl: './gauge-local.component.html',
  styleUrls: ['./gauge-local.component.css']
})
export class GaugeLocalComponent implements OnInit {

  private chart: any;

  generateGraph(): void {
    this.gauge_value
  }
  

  private _gauge_value: number;

  get gauge_value(): number {
    // transform value for display
    return this._gauge_value
  };


  @Input()
  set gauge_value(gauge_value: number) {
    //console.log('prev value: ', this._seq);
    //console.log('got name: ', seq);
    this._gauge_value = gauge_value;
    this.generateGraph();
  };

  constructor(private AmCharts: AmChartsService) { }

  ngOnInit() {

    this.chart = this.AmCharts.makeChart("chartdiv", {
      "type": "gauge",
      "theme": "light",
      "axes": [{
        "axisThickness": 1,
        "axisAlpha": 0.2,
        "tickAlpha": 0.2,
        "valueInterval": 0.1,
        "bands": [{
          "color": "#84b761",
          "endValue": 0.5,
          "startValue": 0
        }, {
          "color": "#fdd400",
          "endValue": 1,
          "startValue": 0.5
        }, {
          "color": "#cc4748",
          "endValue": 2,
          "innerRadius": "95%",
          "startValue": 1
        }],
        "bottomText": "0",
        "bottomTextYOffset": -20,
        "endValue": 10
      }],
      "arrows": [{}],
      "export": {
        "enabled": true
      }
    });

    var value = this.gauge_value;
    if (this.chart) {
      if (this.chart.arrows) {
        if (this.chart.arrows[0]) {
          if (this.chart.arrows[0].setValue) {
            this.chart.arrows[0].setValue(value);
            this.chart.axes[0].setBottomText(value);
          }
        }
      }
    }



  }

  ngOnDestroy() {
    this.AmCharts.destroyChart(this.chart);
  }

}


