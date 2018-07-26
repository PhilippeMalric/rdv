import { Component, OnInit, Input } from '@angular/core';

import { AmChartsService } from 'amcharts3-angular2';

import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-histo-acug-obs',
  templateUrl: './histo-acug_obs.component.html',
  styleUrls: ['./histo-acug_obs.component.css']
})
export class HistoACUG_obsComponent implements OnInit {

  seq: String;

  private chartG: any;

  private _jsonFile$: Observable<any>;

  get jsonFile$(): Observable<any> {
    // transform value for display
    return this._jsonFile$
  };


  @Input()
  set jsonFile$(jsonFile$: Observable<any>) {
    //console.log('prev value: ', this._seq$);
    //console.log('got name: ', seq$);
    this._jsonFile$ = jsonFile$;
    this.jsonFile$.subscribe(data => {
      //console.log("data", data)
      let mappedData = $.map(data.data_annotation, function (v) { return v; })
      //console.log("mappedData", mappedData)
      let allSequences = mappedData.map(x => x.sequence[0])
      this.seq = allSequences.join();
      this.generateGraph();
    });
  };

  constructor(private AmCharts: AmChartsService) { }

  generateGraph() {


    this.chartG = this.AmCharts.makeChart("chart_histoGlobal", {
      "type": "pie",
      "startDuration": 0,
      "theme": "light",
      "addClassNames": true,
      autoMargins: false,
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      pullOutRadius: 0,
      "legend": {
        "position": "right",
        "marginRight": 100,
        "autoMargins": false
      },
      "innerRadius": "30%",
      "defs": {
        "filter": [{
          "id": "shadow",
          "width": "200%",
          "height": "200%",
          "feOffset": {
            "result": "offOut",
            "in": "SourceAlpha",
            "dx": 0,
            "dy": 0
          },
          "feGaussianBlur": {
            "result": "blurOut",
            "in": "offOut",
            "stdDeviation": 5
          },
          "feBlend": {
            "in": "SourceGraphic",
            "in2": "blurOut",
            "mode": "normal"
          }
        }]
      },
      "dataProvider": [{
        "nucleotide": "A",
        "v": this.getNumberOfLetter(this.seq, 'A')
      },
      {
        "nucleotide": "C",
        "v": this.getNumberOfLetter(this.seq, 'C')
      },
      {
        "nucleotide": "U",
        "v": this.getNumberOfLetter(this.seq, 'U')
      },
      {
        "nucleotide": "G",
        "v": this.getNumberOfLetter(this.seq, 'G')
      },],
      "valueField": "v",
      "titleField": "nucleotide",
      "export": {
        "enabled": true
      }
    });

  }

  ngOnInit() {

  };





  getNumberOfLetter(seq, letter) {
    //console.log("seq : " ,seq)
    if (seq == "" || seq == null) return 0
    let matched = seq.match(new RegExp(letter, "g"))
    //console.log("matched : ", matched)
    if (matched == null) return 0
    return matched.length;
    // / seq.length

  }


  ngOnDestroy() {
    this.AmCharts.destroyChart(this.chartG);
  }

}
