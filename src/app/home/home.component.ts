import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Inject  } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router'; 
import { FigureComponent } from "../figure/figure.component"
import { DOCUMENT } from '@angular/common';
import { PageScrollService, PageScrollInstance } from 'ngx-page-scroll';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('container') private container: ElementRef;
  elems: any;
  index = 0;
  visibleSidebar1 = false;

  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) { }

  buttonClick = (id) =>{
    //debugger;
    let index = this.transformToId(id)
    console.log("id : ", id)
    console.log("index : ", index)
    let allCollapse : any = $('.collapsible')
    allCollapse.collapsible('open', index);
  }

  onTabOpen= function (event) {
    console.log("event : ",event)
  }
  
  onTabClose = function (event) {
    console.log("event : ", event)
  }

  ngOnInit() {

    this.elems = document.querySelector('.collapsible');
    $('.collapsible').collapsible('open', 1)
  }

  transformToId = function (id) {
    let numberId = 0
    switch (id) {
      case "page_presentation": {
        numberId = 0
        break;
      }
      case "resume-abstract": {
        numberId = 1
        break;
      }
      case "avant-propos": {
        numberId = 2
        break;
      }
      case "begining": {
        numberId = 3
        break;
      }
      case "historique": {
        numberId = 4
        break;
      }
      case "pourquoi-etudier-l-arn": {
        numberId = 5
        break;
      }
      
      case "definitions": {
        numberId = 6
        break;
      }
      case "chapitre1-rnass": {
        numberId = 7
        break;
      }
      case "chapitre3-coherence": {
        numberId = 8
        break;
      }
        
      default: {
        //statements; 
        break;
      }

    }
    return numberId
  }
  doSmth = function (event) {

    console.log("event : ",event)

  }

  public animateScroll(sectionTarget: string): void {
    // https://github.com/Nolanus/ngx-page-scroll#service
    const pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({
      document: this.document, scrollTarget: sectionTarget, scrollingViews: [this.container.nativeElement]
    });
    this.pageScrollService.start(pageScrollInstance);
  }

}
