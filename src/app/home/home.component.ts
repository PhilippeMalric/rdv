import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router'; // <-- do not forget to import
import { FigureComponent } from "../figure/figure.component"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  index = 0;
  visibleSidebar1 = false;

  buttonClick = (id) =>{
    //debugger;
    console.log("id : ", id)
    this.index = this.transformToId(id)

  }

  onTabOpen= function (event) {
    console.log("event : ",event)
  }
  
  onTabClose = function (event) {
    console.log("event : ", event)
  }

  ngOnInit() {
  }

  transformToId = function (id) {
    let numberId = 0
    switch (id) {
      case "page_presentation": {
        numberId = 0
        break;
      }
      case "app-avant-propos": {
        numberId = 1
        break;
      }
      case "app-begining": {
        numberId = 2
        break;
      }
      case "app-avertissement": {
        numberId = 3
        break;
      }
      case "app-context": {
        numberId = 4
        break;
      }
      case "app-historique": {
        numberId = 5
        break;
      }
      case "app-pourquoi-etudier-l-arn": {
        numberId = 6
        break;
      }
      case "app-definitions": {
        numberId = 7
        break;
      }

      default: {
        //statements; 
        break;
      }

    }
    return numberId
  }
}
