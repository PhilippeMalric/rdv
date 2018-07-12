import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import * as c3 from 'c3';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-histo-acug',
  templateUrl: './histo-acug.component.html',
  styleUrls: ['./histo-acug.component.css']
})
export class HistoACUGComponent implements OnInit, AfterViewInit {

  private _seq: string;

  get seq(): string {
    // transform value for display
    return this._seq.toUpperCase();
  };


  @Input()
  set seq(seq: string) {
    //console.log('prev value: ', this._seq);
    //console.log('got name: ', seq);
    this._seq = seq;
    this.generateGraph();
  };

  constructor() { }

  ngOnInit() {

    
    
  };

  ngAfterViewInit(): void {
    //console.log("modal",this.seq)
    //this.generateGraph();
  };

  generateGraph() {
    let chart = c3.generate({
      bindto: '#chart',
      data: {
        type: 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); },
        columns: [
          ['A', this.getNumberOfLetter(this.seq, 'A')],
          ['C', this.getNumberOfLetter(this.seq, 'C')],
          ['U', this.getNumberOfLetter(this.seq, 'U')],
          ['G', this.getNumberOfLetter(this.seq, 'G')]
        ]
      }
    });
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


  

}
