import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avant-propos',
  templateUrl: './avant-propos.component.html',
  styleUrls: ['./avant-propos.component.css']
})
export class AvantProposComponent implements OnInit {

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
