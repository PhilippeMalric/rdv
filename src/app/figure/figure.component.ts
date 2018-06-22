import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-figure',
  templateUrl: './figure.component.html',
  styleUrls: ['./figure.component.css']
})
export class FigureComponent implements OnInit {

  @Input()
  name:string
  constructor() { }


  ngOnInit() {

    console.log("name : ", this.name)

  }

}
