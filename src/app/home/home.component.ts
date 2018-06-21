import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router'; // <-- do not forget to import

 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private fragment: string;
  events: string[] = [];
  opened: boolean;
  private currentSection = 'section1';
  constructor(private route: ActivatedRoute, router: Router) {
    router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          const element = document.querySelector("#" + tree.fragment);
          if (element) {
            const elementRect = element.getBoundingClientRect();
            const absoluteElementTop = elementRect.top + window.pageYOffset;
            const middle = absoluteElementTop - 70;
            window.scrollTo(0, middle);
          }
        }
      }
    });
  }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
    this.route.params.subscribe(params => {
      this.currentSection = params['sectionId'];
    })
  }

  ngAfterViewInit(): void {
    try {
      const element = document.getElementById(this.fragment);
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const middle = absoluteElementTop - 70;
      window.scrollTo(0, middle);
    } catch (e) { }
  }
  scrollTo(section) {
    this.currentSection = section;
  }

}
