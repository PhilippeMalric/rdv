import { Component, OnInit, Input } from '@angular/core';
import * as c3 from 'c3';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-gauge-global',
  templateUrl: './gauge-global.component.html',
  styleUrls: ['./gauge-global.component.css']
})
export class GaugeGlobalComponent implements OnInit {


  generateGraph(): void {
    var chart = c3.generate({
      bindto: '#gaugeG',
      data: {
        columns: [
          ['data', this.gauge_value]
        ],
        type: 'gauge',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      },
      gauge: {
        //        label: {
        //            format: function(value, ratio) {
        //                return value;
        //            },
        //            show: false // to turn off the min/max labels.
        //        },
        //    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
               max: 2, // 100 is default
              units: 'value',
        //    width: 39 // for adjusting arc thickness
      },
      color: {
        pattern: ['#0011ff', '#00ff00', '#7700ff', '#ff0000'], // the three color levels for the percentage values.
        threshold: {
                      unit: 'value', // percentage is default
                      max: 2, // 100 is default
                      values: [0, 0.5, 1, 2]
        }
      },
      size: {
        height: 180
      }
    });
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

  constructor() { }

  ngOnInit() {
  }

}
