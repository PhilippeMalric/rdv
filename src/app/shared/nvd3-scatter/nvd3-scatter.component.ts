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


  collection: string;

  options1 = null
  data1$: Observable<any[]> = null;
  data1: any = null
  ncm1 = null;
  score1 = 2;
  discriminant1 = 0

  options2 = null
  data2$: Observable<any[]> = null;
  data2: any = null
  ncm2 = null;
  score2 = 2;
  discriminant2 = 0



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

    //this.majsrvService.createNCM_stat_Observable(collection, soft).subscribe(x => console.log("test : ", x))
  }

  click() {


    this.options1 = {
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
        yDomain: [-1, 1],
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
          contentGenerator: (d) => {
            this.ncm1 = d.point.ncm;
            console.log("ncm : ", this.ncm1);
            let ratio = (d.point.low + d.point.hi == 0) ? 0 : (d.point.hi - d.point.low) / (d.point.low + d.point.hi)
            let power = Math.pow(1 - Math.abs(ratio), 2)
            return '<p>Hi : ' + d.point.hi + '</p><p>Bg : ' + d.point.bg + '</p><p>Low : ' + d.point.low +
              '</p><p>ratio : ' + ratio + '</p><p>discriminant : ' + power +
              '</p><p>NCM : ' + this.ncm1 + '</p>';
          }
        }
      }
    }


    this.data1$ = this.majsrvService.createNCM_stat_Observable(this.collection, "so", this.min)
    console.log("data$", this.data1$)

    this.data1$.subscribe((x) => {
      console.log("data", x)
      this.data1 = [{
        values: x.sort(this.mySort)
      }]
      let tab = x.map(y => Math.pow(1 - Math.abs((y.hi - y.low) / (y.low + y.hi)),2))
      let myTotal = 0;  // Variable to hold your total

      for (var i = 0, len = tab.length; i < len; i++) {
        myTotal += tab[i];  // Iterate over your first array and then grab the second element add the values up
      }

      this.discriminant1 = myTotal / tab.length

    })



    //------------------------------------ mcff

    this.options2 = {
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
        yDomain: [-1, 1],
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
          contentGenerator: (d) => {
            this.ncm1 = d.point.ncm;
            console.log("ncm : ", this.ncm1);
            let ratio = (d.point.low + d.point.hi == 0) ? 0 : (d.point.hi - d.point.low) / (d.point.low + d.point.hi)
            let power = Math.pow(1 - Math.abs(ratio), 2)
            return '<p>Hi : ' + d.point.hi + '</p><p>Bg : ' + d.point.bg + '</p><p>Low : ' + d.point.low +
              '</p><p>ratio : ' + ratio + '</p><p>discriminant : ' + power +
              '</p><p>NCM : ' + this.ncm1 + '</p>';
          }
        }
      }
    }


    this.data2$ = this.majsrvService.createNCM_stat_Observable(this.collection, "mcff", this.min)
    console.log("data$", this.data2$)

    this.data2$.subscribe((x) => {
      console.log("data", x)
      this.data2 = [{
        values: x.sort(this.mySort)
      }]

      let tab = x.map(y => Math.pow(1 - Math.abs((y.hi - y.low) / (y.low + y.hi)), 2))
      let myTotal = 0;  // Variable to hold your total

      for (var i = 0, len = tab.length; i < len; i++) {
        myTotal += tab[i];  // Iterate over your first array and then grab the second element add the values up
      }

      this.discriminant2 = myTotal / tab.length


    })

  }


}
