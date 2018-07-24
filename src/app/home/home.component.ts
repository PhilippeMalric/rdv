import { Component, OnInit, AfterViewInit, ViewEncapsulation, ViewChild, ElementRef, Inject  } from '@angular/core';
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
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('container') private container: ElementRef;
  elems: any;
  index = 0;
  visibleSidebar1 = false;
  activPanel = 0

  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) { }


  public goTo(x): void {
    setTimeout(() => {
      let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, x);
      this.pageScrollService.start(pageScrollInstance);
    },500)
    
  }; 

  activatePanel(x) {

    this.activPanel = x

  }

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
  }

  ngAfterViewInit() {
    setTimeout(function () {

      let allCollapse: any = $('.collapsible')
      allCollapse.collapsible('open', 0);

    }, 1000);

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
      case "chapitre1-rnass": {
        numberId = 4
        break;
      }
      case "chapitre2-RDV": {
        numberId = 5
        break;
      }
      case "chapitre3-coherence": {
        numberId = 6
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
