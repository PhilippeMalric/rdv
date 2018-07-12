import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metriques',
  templateUrl: './metriques.component.html',
  styleUrls: ['./metriques.component.css']
})
export class MetriquesComponent implements OnInit {

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
