import { Component, OnInit, Input } from '@angular/core';

import { AmChartsService } from 'amcharts3-angular2';

@Component({
  selector: 'app-gauge-local-stn',
  templateUrl: './gauge-local-stn.component.html',
  styleUrls: ['./gauge-local-stn.component.css']
})
export class GaugeLocalStnComponent implements OnInit {

  private chartLStn: any;

  generateGraph(gauge_value_Local): void {
    console.log("gauge_value_Local!!!",gauge_value_Local)
    let valueLocal = gauge_value_Local;
    if (this.chartLStn) {
      if (this.chartLStn.arrows) {
        if (this.chartLStn.arrows[0]) {
          if (this.chartLStn.arrows[0].setValue) {
            this.chartLStn.arrows[0].setValue(valueLocal);
            this.chartLStn.axes[0].setBottomText(valueLocal.toFixed(2));
          }
        }
      }
    }
    // Pour le premier ...
    setTimeout(() => {
      if (this.chartLStn) {
        if (this.chartLStn.arrows) {
          if (this.chartLStn.arrows[0]) {
            if (this.chartLStn.arrows[0].setValue) {
              this.chartLStn.arrows[0].setValue(valueLocal);
              this.chartLStn.axes[0].setBottomText(valueLocal);
          }
        }
      }
      }
    }, 1000)
  }
  

  private _gauge_value_Local_stn: number;

  get gauge_value_Local_stn(): number {
    // transform value for display
    return this._gauge_value_Local_stn
  };


  @Input()
  set gauge_value_Local_stn(gauge_value_Local_stn: number) {
    console.log('prev value: ', this._gauge_value_Local_stn);
    console.log('new: ', gauge_value_Local_stn);
    this._gauge_value_Local_stn = gauge_value_Local_stn;
    this.generateGraph(gauge_value_Local_stn);
  };

  constructor(private AmCharts: AmChartsService) { }

  ngOnInit() {

    this.chartLStn = this.AmCharts.makeChart("chartdivLocalStn", {
      "type": "gauge",
      "theme": "light",
      "axes": [{
        "axisThickness": 1,
        "axisAlpha": 1,
        "tickAlpha": 1,
        "valueInterval": 0.5,
        "bands": [{
          "color": "#84b761",
          "endValue": 2,
          "startValue": 0
        }, {
          "color": "#fdd400",
          "endValue": 4,
          "startValue": 2
        }, {
          "color": "#cc4748",
          "endValue": 6,
          "innerRadius": "95%",
          "startValue": 4
        }],
        "bottomText": "0",
        "bottomTextYOffset": -20,
        "endValue": 6
      }],
      "arrows": [{}],
      "export": {
        "enabled": true
      }
    });



  }

  ngOnDestroy() {
    this.AmCharts.destroyChart(this.chartLStn);
  }

}


