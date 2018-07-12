import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logiciels',
  templateUrl: './logiciels.component.html',
  styleUrls: ['./logiciels.component.css']
})
export class LogicielsComponent implements OnInit {

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
