import { Component, OnInit, ViewEncapsulation, OnChanges, ViewChild, ElementRef, Input,  } from '@angular/core';
import * as d3 from 'd3';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BarChartComponent implements OnInit {

  @ViewChild('chart') private chartContainer: ElementRef;
  @Input() private data: Array<any>;
  private width: number;
  private height: number;


  constructor() { }

  ngOnInit() {
    this.createChart();
  }


  createChart() {

    const element = this.chartContainer.nativeElement;
    this.height = 200
    this.width = 200

    const svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);

    svg.select("#circle").append("circle").attr("cx", function (d) { return 100; })
                                          .attr("cy", function (d) { return 100; })
                                          .attr("r", function (d) { return 100; })
                                          .style("fill", function (d) { return "red"; });
    
  }
  

}
