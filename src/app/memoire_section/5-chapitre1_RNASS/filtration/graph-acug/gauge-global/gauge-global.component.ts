import { Component, OnInit, Input } from '@angular/core';
import { AmChartsService } from "amcharts3-angular2";
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-gauge-global',
  templateUrl: './gauge-global.component.html',
  styleUrls: ['./gauge-global.component.css']
})
export class GaugeGlobalComponent implements OnInit {

  private chart: any;
  
  generateGraph(): void {
    this.gauge_value
  }
  gauge_value: number;

  myAverage(values): number {

    let sum = values.reduce((previous, current) => current += Number(previous));
    let avg = sum / values.length;
    return avg;
  }

  private _jsonFile$: Observable<any>;

  get jsonFile$(): Observable<any> {
    // transform value for display
    return this._jsonFile$
  };


  @Input()
  set jsonFile$(jsonFile$: Observable<any>) {
    //console.log('prev value: ', this._gauge_value$);
    //console.log('got name: ', gauge_value$);
    this._jsonFile$ = jsonFile$;
    this.jsonFile$.subscribe(data => {
      //console.log("data", data)
      let arrayOfArray = $.map(data.data_reactivity, function (v) { return Number(v); })
      //let arrayOfAvg = arrayOfArray.map(this.myAverage)
      //let arrayOfAvg_num = arrayOfAvg.map(x => Number(x))
      this.gauge_value = this.myAverage(arrayOfArray)
      this.generateGraph();
    });
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
    } );

    var value = Math.round(this.gauge_value);
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
