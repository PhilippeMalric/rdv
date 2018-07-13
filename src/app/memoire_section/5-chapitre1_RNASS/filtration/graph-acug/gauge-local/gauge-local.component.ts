import { Component, OnInit, Input } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-gauge-local',
  templateUrl: './gauge-local.component.html',
  styleUrls: ['./gauge-local.component.css']
})
export class GaugeLocalComponent implements OnInit {

  generateGraph(): void {
    var chart = c3.generate({
      bindto: '#gaugeL',
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
            width: 20 // for adjusting arc thickness
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
        height: 100
      }
    });
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

  constructor() { }

  ngOnInit() {
  }

}


