import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RnaJsonService } from 'src/app/service/rna-json.service';
import * as d3 from 'd3';
import { google_colors, plotRNA, click_ss } from './helper'


@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.css']
})
export class RdvComponent implements OnInit {

  rnas:string[] = []
  svg: any;
  rna = ""

  @ViewChild('chart') private chartContainer: ElementRef;
  

  constructor( private rnaJsonService: RnaJsonService) {

    for (let i = 1; i <= 2; i++) {

      this.rnas.push(""+i);

    }
    this.rnas.push("ETERNA_R00_0002_37");
    this.rnas.push("ETERNA_R69_0000_2674");
    this.rnas.push("ETERNA_R69_0000_3008");
    this.rnas.push("ETERNA_R00_0002_2192");
    
  }

  ngOnInit() {

    //this.loadJson("1")

  }



  changeRNA(name) {
    console.log("changeRNA : name : ",name)
   this.loadJson(name)
  }

  click() {
    let name = this.rna

    console.log("changeRNA : name : ", name)
    this.loadJson(name)
  }



  loadJson(name) {

    this.rnaJsonService.getRNA(name).subscribe(data => {
      console.log("data: ",data)
      this.createVizualisation(data)
    })
  }


  createVizualisation(jsonData) {

    let pos = 0

    const element = this.chartContainer.nativeElement;

    let height = 1000
    let width = "100%"
    d3.select("#ss_svg").remove()
    this.svg = d3.select(element).append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr("id","ss_svg");



    plotRNA(this.svg, jsonData, pos)

  }

  
  // fin export
}

/*
 *

var dataD = null
var dataG = null

//-----------------------------------------------------------------------------------------------------------



*/
