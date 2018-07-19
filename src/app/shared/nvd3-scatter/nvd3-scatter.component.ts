import * as d3 from 'd3';
import { Component, OnInit, Input } from '@angular/core';
import { MajsrvService } from "../../service/majsrv.service"
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-nvd3-scatter',
  templateUrl: './nvd3-scatter.component.html',
  styleUrls: ['./nvd3-scatter.component.css']
})
export class Nvd3ScatterComponent implements OnInit {

  options = null
  data$: Observable<any[]> = null;
  data: any = null
  @Input() collection: string;
  @Input() soft: string;
  ncm = null;
  score = 2;
  min = 1

  mySort = (a: any, b: any): number => {
    if ((a.low + a.hi) == 0 && (b.low + b.hi) == 0) {
      return 0;
    }
    else {
      if ((a.low + a.hi) > 0) {
        let ratioA = (a.hi - a.low) / (a.low + a.hi);
        if ((b.low + b.hi) > 0) {
          let ratioB = (b.hi - b.low) / (b.low + b.hi);
          if (ratioA == ratioB) {return 0}
            return (ratioA > ratioB) ? 1 : -1;
        }
        else {
          return -1;
        }
      }
      else {
        return 1;
      }
    }
  }


  constructor(private majsrvService: MajsrvService) {
  }

  ngOnInit() {

    this.options = {
      chart: {
        type: 'scatterChart',
        useInteractiveGuideline: true,
        height: 500,
        width: 1000,
        transitionDuration: 350,
        showLegend: false,
        margin: {
          top: 20,
          right: 20,
          bottom: 40,
          left: 70
        },
        //color: [],
        x: (d, i) => { return i; },
        y: (d) => {
          return (d.low + d.hi == 0) ? 0 : (d.hi - d.low) / (d.low + d.hi);
        },
        yDomain:[-1,1],
        yAxis: {
          axisLabel: 'Ratio',
          tickFormat: (d) => {
            if (d == null) {
              return 0;
            }
            return d3.format('.02f')(d);
          },
          axisLabelDistance: 1
        },
        tooltip: {
          contentGenerator:  (d) => {
            this.ncm = d.point.ncm;
            console.log("ncm : ", this.ncm);
            return '<p>Hi : ' + d.point.hi + '</p><p>Bg : ' + d.point.bg + '</p><p>Low : ' + d.point.low + '</p>';
          }
        }
      }
    }

    
    this.data$ = this.majsrvService.createNCM_stat_Observable(this.collection, this.soft,this.min)
    console.log("data$", this.data$)

    this.data$.subscribe((x) => {
      console.log("data", x)
      this.data = [{
        values: x.sort(this.mySort)
      }]
    })


    //this.majsrvService.createNCM_stat_Observable(collection, soft).subscribe(x => console.log("test : ", x))
  }

}
