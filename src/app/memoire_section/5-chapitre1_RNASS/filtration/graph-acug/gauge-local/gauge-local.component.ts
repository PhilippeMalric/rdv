import { Component, OnInit, Input } from '@angular/core';

import { AmChartsService } from 'amcharts3-angular2';

@Component({
  selector: 'app-gauge-local',
  templateUrl: './gauge-local.component.html',
  styleUrls: ['./gauge-local.component.css']
})
export class GaugeLocalComponent implements OnInit {

  private chartL: any;

  generateGraph(gauge_value_Local): void {
    console.log("gauge_value_Local!!!",gauge_value_Local)
    let valueLocal = gauge_value_Local;
    if (this.chartL) {
      if (this.chartL.arrows) {
        if (this.chartL.arrows[0]) {
          if (this.chartL.arrows[0].setValue) {
            this.chartL.arrows[0].setValue(valueLocal);
            this.chartL.axes[0].setBottomText(valueLocal);
          }
        }
      }
    }
    // Pour le premier ...
    setTimeout(() => {
    if (this.chartL) {
      if (this.chartL.arrows) {
        if (this.chartL.arrows[0]) {
          if (this.chartL.arrows[0].setValue) {
            this.chartL.arrows[0].setValue(valueLocal);
            this.chartL.axes[0].setBottomText(valueLocal);
          }
        }
      }
      }
    }, 1000)
  }
  

  private _gauge_value_Local: number;

  get gauge_value_Local(): number {
    // transform value for display
    return this._gauge_value_Local
  };


  @Input()
  set gauge_value_Local(gauge_value_Local: number) {
    console.log('prev value: ', this._gauge_value_Local);
    console.log('new: ', gauge_value_Local);
    this._gauge_value_Local = gauge_value_Local;
    this.generateGraph(gauge_value_Local);
  };

  constructor(private AmCharts: AmChartsService) { }

  ngOnInit() {

    this.chartL = this.AmCharts.makeChart("chartdivLocal", {
      "type": "gauge",
      "theme": "light",
      "axes": [{
        "axisThickness": 1,
        "axisAlpha": 0.2,
        "tickAlpha": 0.2,
        "valueInterval": 0.2,
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
        "endValue": 2
      }],
      "arrows": [{}],
      "export": {
        "enabled": true
      }
    });



  }

  ngOnDestroy() {
    this.AmCharts.destroyChart(this.chartL);
  }

}


