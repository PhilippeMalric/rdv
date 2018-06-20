import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-side-nav',
  templateUrl: './my-side-nav.component.html',
  styleUrls: ['./my-side-nav.component.css']
})
export class MySideNavComponent implements OnInit {
  ngOnInit(): void {
   
  }
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  constructor(private breakpointObserver: BreakpointObserver) {}
}

