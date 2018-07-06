import { Component, OnInit } from '@angular/core';
import { RnaJsonService } from 'src/app/service/rna-json.service';
import * as d3 from 'd3';

import { plotRNA, click_ss } from './helper'

@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.css']
})
export class RdvComponent implements OnInit {



  colorConverter = {};
  ntColorSwitch = 0;
  changeNodeColor = null;
  ntTab = ['A', 'U', 'C', 'G'];



  constructor(private rnaJsonService: RnaJsonService) {

    this.colorConverter['A'] = this.colores_google(0);
    this.colorConverter['C'] = this.colores_google(1);
    this.colorConverter['G'] = this.colores_google(2);
    this.colorConverter['U'] = this.colores_google(3);


  }



  ngOnInit() {
  }



  loadJson() {
    this.rnaJsonService.getRNA(name).subscribe(data => {
      console.log(data)
      this.createVizualisation(data)
    })
  }

  //--------------------------------------------------------------Debut des fonctions generique (voir helper aussi)

  mouseOverF = function (d, i) {
    //console.log(d)

    //return ilumineNt(d,i);
  }

  mouseOutF = function (d, i) {
    //console.log(d)
    //ntColorSwitch = (ntColorSwitch +2) % 3
    //changeNodeColor()
  }

  ilumineNt = function (d, i, secStructSelected_int, nt_mcff) {
    let voisin = null
    if (secStructSelected_int < nt_mcff) {
      voisin = d.voisin_mcff[secStructSelected_int]
    }
    else {
      voisin = d.voisin_so[secStructSelected_int - nt_mcff]
    }
    console.log(voisin)

    if (voisin.p_i == -1) {

      let tab1 = this.getNtBetween(voisin.vg, voisin.vd)
      let tab2 = this.getNtBetween(voisin.p_vg, voisin.p_vd)
      let tab3 = tab1.concat(tab2)
      tab3.map(this.ligthNt)
      this.ligthNt2(i)
    }
    else {
      let tab1 = this.getNtBetween(voisin.vg, voisin.vd)
      let tab2 = this.getNtBetween(voisin.p_vg, voisin.p_vd)
      let tab3 = tab1.concat(tab2)
      tab3.map(this.ligthNt)
      this.ligthNt2(i)
    }

}
  ligthNt = function (n) {
    this.svg_ss.select("#_" + n).attr("fill", this.ntColorLigth)
  }

  ligthNt2 = function (n) {
    this.svg_ss.select("#_" + n).attr("fill", this.ntColorLigth2)
  }
  darkNt = function (n) {
    this.svg_ss.select("#_" + n).attr("fill", this.ntColorDark)
  }

  getNtBetween = function (i, j) {
  let tab = []
  if (i < 0 || j < 0 || i == "-" || j == "-") {
    if (i > 0 && i != "-") { return [i] }
    if (j > 0 && j != "-") { return [j] }
    return tab
  }


  if (i > j) {
    for (let k = j; k < i + 1; k++) {
      tab.push(k)
    }
  }
  else {

    for (let k = i; k < j + 1; k++) {
      tab.push(k)
    }
  }
  return tab
}

  ntColorLigth = function (d, i) {
    console.log(d)
    return d3.rgb(d.color).brighter(2)
  }
  ntColorLigth2 = function (d, i) {
    console.log(d)
    return d3.rgb(d.color).brighter(4)
  }
  ntColorDark = function (d, i) {
    console.log(d)
    return d3.rgb(d.color).brighter(3)
  }

  colores_google(n) {
    let colores_g = ["#3075ff", "#ff5d35", "#ff16dc", "#109618"];
    return colores_g[n % colores_g.length];
  }

  filterMinus1 = function (tab) {
    let newTab = []
    for (let i in tab) {
      if (tab[i] != -999) {
        newTab.push(tab[i])
      }
    }
    return newTab
  }
  ntColor = function (d, i, pos) {
    if (i != pos) {
      let s = d.sorte
      let c = s.toUpperCase()
      let color = this.colorConverter[c]
      d.color = color
      return color
    }
    else {
      let color = "yellow" //couleur du nucleotide !id
      d.color = color
      return color
    }
}
  createVizualisation(jsonData) {

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

  }
}

/*
 *

var dataD = null
var dataG = null

//-----------------------------------------------------------------------------------------------------------



*/
