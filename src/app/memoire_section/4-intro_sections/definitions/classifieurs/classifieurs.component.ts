import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classifieurs',
  templateUrl: './classifieurs.component.html',
  styleUrls: ['./classifieurs.component.css']
})
export class ClassifieursComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onTabOpen = function (event) {
    console.log("event : ", event)
  }

  onTabClose = function (event) {
    console.log("event : ", event)
  }
}
