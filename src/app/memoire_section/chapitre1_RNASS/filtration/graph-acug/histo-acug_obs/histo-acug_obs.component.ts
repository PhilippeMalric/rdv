import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import * as c3 from 'c3';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-histo-acug-obs',
  templateUrl: './histo-acug_obs.component.html',
  styleUrls: ['./histo-acug_obs.component.css']
})
export class HistoACUG_obsComponent implements OnInit, AfterViewInit {

  seq: String;


  private _seq$: Observable<any>;

  get seq$(): Observable<any> {
    // transform value for display
    return this._seq$
  }


  @Input()
  set seq$(seq$: Observable<any>) {
    console.log('prev value: ', this._seq$);
    console.log('got name: ', seq$);
    this._seq$ = seq$;
    this.seq$.subscribe(data => {
      console.log("data", data)
      let mappedData = $.map(data.data_annotation, function (v) { return v; })
      console.log("mappedData", mappedData)
      let allSequences = mappedData.map(x => x.sequence[0])
      this.seq = allSequences.join();
      this.generateGraph()
    })
  }


  constructor() { }

  ngOnInit() {

   
    
  }

  ngAfterViewInit(): void {
    
  }

  generateGraph() {
    let chart = c3.generate({
      bindto: '#chart2',
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
  }

  getNumberOfLetter(seq, letter) {
    console.log("seq : " ,seq)
    if (seq == "" || seq == null) return 0
    let matched = seq.match(new RegExp(letter, "g"))
    console.log("matched : ", matched)
    if (matched == null) return 0
    return matched.length;
    // / seq.length

  }


  

}
