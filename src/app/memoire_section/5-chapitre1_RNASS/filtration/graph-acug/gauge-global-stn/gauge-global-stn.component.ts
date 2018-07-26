import { Component, OnInit, Input } from '@angular/core';
import { AmChartsService } from "amcharts3-angular2";
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-gauge-global-stn',
  templateUrl: './gauge-global-stn.component.html',
  styleUrls: ['./gauge-global-stn.component.css']
})
export class GaugeGlobalStnComponent implements OnInit {

  private chartStn: any;
  
  generateGraph(): void {
    
    let value = this.gauge_value;
    if (this.chartStn) {
      if (this.chartStn.arrows) {
        if (this.chartStn.arrows[0]) {
          if (this.chartStn.arrows[0].setValue) {
            this.chartStn.arrows[0].setValue(value);
            this.chartStn.axes[0].setBottomText(value.toFixed(2));
          }
        }
      }
    }
    
  }
  gauge_value: number;

  myAverage(values): number {

    let sum = values.reduce((previous, current) => current += Number(previous));
    //console.log("sum",sum)
    let avg = sum / values.length;
    //console.log("avg", avg)
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
      //console.log("data_annotation", data.data_annotation)
      //let arrayOfArray = $.map(data.data_reactivity, function (v) { return Number(v); })
      let mappedData = $.map(data.data_annotation, function (v) { return v; })
      //console.log("mappedData-data_annotation", mappedData)
      let arrayOfStn = mappedData.map(x => Number((x.signal_to_noise[0]).split(":")[1]))

      //console.log("arrayOfAvg_num : ", arrayOfAvg_num)
      this.gauge_value = this.myAverage(arrayOfStn)
      console.log("genChart", this.gauge_value)
      this.generateGraph();
      
    });
  };

  constructor(private AmCharts: AmChartsService) { }

  ngOnInit() {

    this.chartStn = this.AmCharts.makeChart("chartdivStn", {
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
    } );

   }

  ngOnDestroy() {
    this.AmCharts.destroyChart(this.chartStn);
  }

}
