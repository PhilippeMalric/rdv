import { Component, OnInit, Input } from '@angular/core';

import { AmChartsService } from 'amcharts3-angular2';


@Component({
  selector: 'app-histo-acug',
  templateUrl: './histo-acug.component.html',
  styleUrls: ['./histo-acug.component.css']
})
export class HistoACUGComponent implements OnInit {

  private _seq: string;


  private chartL: any;


  get seq(): string {
    // transform value for display
    return this._seq
  };


  @Input()
  set seq(seq: string) {
    //console.log('prev value: ', this._seq);
    //console.log('got name: ', seq);
    this._seq = seq;
    this.generateGraph();
  };

  constructor(private AmCharts: AmChartsService) { }

  generateGraph() {


    this.chartL = this.AmCharts.makeChart("chart_histoLocal", {
      "type": "pie",
      "startDuration": 0,
      "theme": "light",
      labelsEnabled: false,
      autoMargins: false,
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      pullOutRadius: 0,
      "balloon": {
        "fixedPosition": true
      },
      "legend": {
        "enabled":true,
        "position": "right",
        "marginRight": 100,
        "autoMargins": false
      },
      "addClassNames": true,
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
    this.AmCharts.destroyChart(this.chartL);
  }

}



