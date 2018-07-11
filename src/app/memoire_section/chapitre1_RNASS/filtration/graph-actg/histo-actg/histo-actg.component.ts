import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import * as c3 from 'c3';


@Component({
  selector: 'app-histo-actg',
  templateUrl: './histo-actg.component.html',
  styleUrls: ['./histo-actg.component.css']
})
export class HistoACTGComponent implements OnInit, AfterViewInit {

  @Input() seq: string;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
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
          ['G',this.getNumberOfLetter(this.seq, 'G')]
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
