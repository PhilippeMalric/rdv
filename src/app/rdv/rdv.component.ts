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


  @ViewChild('chart') private chartContainer: ElementRef;
  

  constructor( private rnaJsonService: RnaJsonService) {
   
  }



  ngOnInit() {

    this.loadJson()

  }



  loadJson() {

    let name = "ETERNA_R74_0000-942"

    this.rnaJsonService.getRNA(name).subscribe(data => {
      console.log("data: ",data)
      this.createVizualisation(data)
    })
  }


  createVizualisation(jsonData) {

    /*
    let id = ""
    let folder1 = "new_bestRNA"
    let pos = 0
    let folderName = ""

    let force_ss = null
    let links_ss = null
    let nodes_ss = []
    let links_gt = null
    let nodes_gt = null
    let force_gt = null
    let link_gt_l = null
    let node_gt_c = null
    let svg_ss = null
    let width_ss = null
    let height_ss = null
    let svg_gt = null
    let width_gt = null
    let height_gt = null

    let shuffleStop = null


    let circleRadius_gt = 15;

    let rampEnergyMCff = null
    let rampEnergySO = null

    let secStructSelected_int = 0

    let gap_gt = 50

    let interval_motion = null

    let interval_scroll = null

    let scrollOn = true

    let soNumber = null




    let reactivityScaleWs = null

    let reactivityScaleRayd = null

    let reactivityScaleColor = null

    let reactivityErrorScaleColor = null

    let mcff_gt_scale = null

    let so_gt_scale = null
    */

    const element = this.chartContainer.nativeElement;

    let height = 1000
    let width = "100%"

    const svg = d3.select(element).append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr("id","ss_svg");



    plotRNA(svg, jsonData, pos)

  }

  
  // fin export
}

/*
 *

var dataD = null
var dataG = null

//-----------------------------------------------------------------------------------------------------------



*/
