import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {

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