import { Component, OnInit, ViewEncapsulation, OnChanges, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';
import * as d3 from 'd3';
import { Graph } from '../../objectDef/Graph';
import { Node } from '../../objectDef/Node';
import { Link } from '../../objectDef/Link';
import { Ncm } from '../../objectDef/Ncm';
import { LNode } from '@angular/core/src/render3/interfaces/node';

import { fillcolorNode, fillcolorRect } from './functionUtiles'

function range(start, end): any {
 return Array.from({ length: (end - start) }, (v, k) => k + start);
}

@Component({
  selector: 'app-graph-layout',
  templateUrl: './graph-layout.component.html',
  styleUrls: ['./graph-layout.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GraphLayoutComponent implements OnInit, AfterViewInit {

  @ViewChild('chart') private chartContainer: ElementRef;
  @Input() _id: string;
  @Input() score: string;
  private width: number;
  private height: number;
  private graph: Graph;
  private ncm1: string;
  private ncm2: string;
  constructor() { }
  private interval_motion = null
  private force = null

  ngOnInit() {
    this.height = 300
    this.width = 300
    console.log("id : ", this._id)
    console.log("score : ", this.score)

  }

  ngAfterViewInit() {

    console.log("id : " + this._id)
    this.fromMergedToGraphLayout(this._id);

  }


 

  fromMergedToGraphLayout = function (merged: string) {

    let graphLayout = {}

      if (merged.indexOf("&") != -1) {

        this.manageMerged(merged)

      }
      else {

        this.unNcm_tx_togL(merged)

      }
    }
  

  manageMerged = function (merged: String) {

    let stringSplited = merged.split("&")
    this.ncm1 = stringSplited[0]
    this.ncm2 = stringSplited[1]
    let ncm1_splitted = []
    let ncm2_splitted = []
    if (this.ncm1 != "" && this.ncm2 != "") { 
      ncm1_splitted = this.ncm1.split("-")
      ncm2_splitted = this.ncm2.split("-")
    }

    let ncm1_end = ""
    let pos = "";
    if (ncm1_splitted.length > 2 && ncm1_splitted[1].length > 1) {

      ncm1_end = ncm1_splitted[2].split("_")[0]
      pos = ncm1_splitted[2].split("_")[2]
      console.log("pos : ", pos)
      console.log("ncm1 : ", ncm1_splitted[1], ncm1_end)
      this.ncm1_Only_seq = ncm1_splitted[1] + ":" + ncm1_end
    }

    let ncm2_end = "";
    if (ncm2_splitted.length > 2 && ncm2_splitted[1].length > 1) {

      ncm2_end = ncm2_splitted[2].split("_")[0]
      

      console.log("ncm2 : ", ncm2_splitted[1], ncm2_end)
      this.ncm2_Only_seq = ncm2_splitted[1] + ":" + ncm2_end
    }

    if (ncm2_splitted.length > 2 && ncm2_splitted[1].length > 1 && ncm1_splitted.length > 2 && ncm1_splitted[1].length > 1) {
      this.graphLayout = this.deuxNcm_tx_togL(ncm1_splitted[1], ncm1_end, ncm2_splitted[1], ncm2_end, pos)
    }
    else {
      if (this.ncm1.indexOf("---") != -1) {

        let loop = this.ncm1.split("---")[1].split("_")[0]
        let s1 = ncm2_splitted[2].split("_")[0]
        let s2 = ncm2_splitted[1]
        this.createNodesLoopG(loop,s1,s2,pos)

      }
      if (this.ncm2.indexOf("---") != -1) {
        let loop = this.ncm2.split("---")[1].split("_")[0]
        let s1 = ncm1_splitted[2].split("_")[0]
        let s2 = ncm1_splitted[1]
        this.createNodesLoopD(loop,s1,s2,pos)
      }

      this.createRedCircle()
    }

  }


  // test
  createNodes1 = function (seq: string, pos: string) {

    let nodes = [];

    for (let c of seq.split("")) {

      nodes.push(this.nodeGen(c, 1))

    }

    nodes[Number(pos)].group = 2

    return nodes


  }

  createLinks1 = function (seq: string) {

    let links = []

    for (let i of range(0,seq.length - 1)) {

      links.push(this.linkGen(i,i+1, 1))

    }

    links.push(this.linkGen(0, seq.length - 1, 2))

    return links

  }

  unNcm_tx_togL = (loop: String) => {

    let nodeTab = [];
    let linkTab = [];


    let pos = loop.split("_")[2]

    let seq = loop.split("---")[1].split("_")[0]


    console.log("s : ", loop, " pos : ", pos, " seq : ", seq);


    nodeTab = this.createNodes1(seq, pos);
    linkTab = this.createLinks1(seq);


    this.graph = { "nodes": nodeTab, "links": linkTab }

    if (!this.graph.nodes) {
      this.graph = { "nodes": [], "links": [] }
    }
    console.log("graph : ", this.graph)

    const element = this.chartContainer.nativeElement;
   

  }

  createRedCircle() {

    const element = this.chartContainer.nativeElement;
    //createGraph(element,graph)
  }


  deuxNcm_tx_togL = (s11: String, s12: String, s21: String, s22: String, pos: string) => {

    let nodeTab = []
    let linkTab = []
    console.log("s : ", s11, s12, s21, s22)


    nodeTab = this.createNodes2(s11, s12, s21, s22, pos)
    linkTab = this.createLinks2(s11, s12, s21, s22)


    this.graph = { "nodes": nodeTab, "links": linkTab }

    if (!this.graph.nodes) {
      this.graph = { "nodes": [], "links": [] }
    }

    const element = this.chartContainer.nativeElement;

    this.createGraph(element)

  }


  // --------------- fonctions utiles
  createNodes2 = function (s11: String, s12: String, s21: String, s22: String, pos: string) {
    let nodes = []


    console.log("nodes creation")
    for (let c of s11.split("")) {

      nodes.push(this.nodeGen(c, 1))

    }
    for (let c of s12.split("")) {

      nodes.push(this.nodeGen(c, 1))

    }

    for (let c of s21.split("").slice(1)) {

      nodes.push(this.nodeGen(c, 1))

    }

    for (let c of s22.split("").slice(0, s22.length - 1)) {

      nodes.push(this.nodeGen(c, 1))

    }
    console.log("nodes : ", nodes)

    nodes[Number(pos)].group = 2

    return nodes

  }


  createLinks2 = function (s11: String, s12: String, s21: String, s22: String) {

    let links = []
    console.log("Links creation")

    let l_s1 = s11.length + s12.length
    let l_s2 = s21.length + s22.length

    let index2eLink1 = s11.length - 1
    let index2eLink2 = s11.length

    // lien des paires de bases
    links.push(this.linkGen(0, l_s1 - 1, 1))
    links.push(this.linkGen(index2eLink1, index2eLink2, 1))
    links.push(this.linkGen(l_s1 + s21.length - 2, l_s1 + s21.length - 1, 1))

    // lien phosphate

    // premier segment
    for (let i of range(0, index2eLink1)) {
      links.push(this.linkGen(i, i + 1, 2))
    }

    // deuxieme segment (dernier si on considere les 2 NCM en tournant dans le sens des aiguilles d'une montre)
    for (let i of range(index2eLink2, l_s1 - 1)) {
      links.push(this.linkGen(i, i + 1, 2))
    }

    // troisieme segment
    for (let i of range(l_s1, l_s1 + s21.length - 2)) {
      links.push(this.linkGen(i, i + 1, 2))
    }

    // quatrieme segment

    for (let i of range(l_s1 + s21.length-1, l_s1 + l_s2 - 3)) {
      links.push(this.linkGen(i, i + 1, 2))
    }

    // connecter les deux ncm
    links.push(this.linkGen(index2eLink1, l_s1, 2))
    links.push(this.linkGen(index2eLink2, l_s1 + l_s2 - 3, 2))

    console.log("Links : ", links)

    return links

  }

  
  createNodesLoopG = function (loop: String, s1: String, s2: String, pos: string): void {


    let nodes = [];


    console.log("loop", loop, "s : ", s1, s2);

    console.log("nodes creation");

    for (let c of loop.split("")) {

      nodes.push(this.nodeGen(c, 1));

    }

    for (let c of s1.split("")) {

      nodes.push(this.nodeGen(c, 1));

    }

    for (let c of s2.split("").slice(1)) {

      nodes.push(this.nodeGen(c, 1));

    }

    console.log("nodes : ", nodes);

    nodes[Number(pos)].group = 2;

    // create Link

    let linkTab = [];


    linkTab = this.createLinksLoopG(loop, s1, s2);


    this.graph = { "nodes": nodes, "links": linkTab };

    if (!this.graph.nodes) {
      this.graph = { "nodes": [], "links": [] }
    }

    const element = this.chartContainer.nativeElement;
    this.createGraph(element)
   }


  createLinksLoopG = function (loop: String, s1: String, s2: String) {

    let links = [];
    console.log("Links creation");

    let indexLastNode = loop.length - 1 + s1.length - 1 + s2.length + 1;
    let indexBeforeLastNode = loop.length - 1 + s1.length - 1 + s2.length;

    let index2eLink1 = s1.length - 1;

    // lien des paires de bases
    links.push(this.linkGen(0, loop.length - 1, 1));
    links.push(this.linkGen(indexLastNode, indexBeforeLastNode - 1, 1));

    // lien phosphate

    // loop
    for (let i of range(0, loop.length - 1)) {
      links.push(this.linkGen(i, i + 1, 2));
    }

    // premier segment du ncm de droite
    for (let i of range(loop.length -1, loop.length -1 + s1.length -1)) {
      links.push(this.linkGen(i, i + 1, 2));
    }

    // troisieme segment
    for (let i of range(loop.length - 1 // index de fin de la loop
                              + s1.length  // index de debut du 2e segment
                              , loop.length - 1 + s1.length + s2.length - 2)) {
      links.push(this.linkGen(i, i + 1, 2));
    }

    // connecter les deux ncm
    links.push(this.linkGen(loop.length - 1 + s1.length + s2.length - 2, 0));

    console.log("Links : ", links);

    return links;

  }


  createNodesLoopD = function (loop: String, s1: String, s2: String, pos: string):void {
    let nodes = []


    console.log("nodes creation")
 
    for (let c of s1.split("")) {

      nodes.push(this.nodeGen(c, 1))

    }

    for (let c of s2.split("").slice(1)) {

      nodes.push(this.nodeGen(c, 1))

    }

    for (let c of loop.split("")) {

      nodes.push(this.nodeGen(c, 1))

    }

    console.log("nodes : ", nodes)

    nodes[Number(pos)].group = 2
    
    let linkTab = this.createLinksLoopD(loop, s1, s2)
    console.log("s : ",loop, s1, s2)




    this.graph = { "nodes": nodes, "links": linkTab }

    if (!this.graph.nodes) {
      this.graph = { "nodes": [], "links": [] }
    }

    const element = this.chartContainer.nativeElement;
    this.createGraph(element)

  }


  createLinksLoopD = function (loop: String, s1: String, s2: String) {


    let links = []
    console.log("Links creation")

    let indexFinSection1 = s1.length - 1
    let indexFinSection2 = s1.length - 1 + s2.length

    let index2eLink1 = s1.length - 1

    // lien des paires de bases
    links.push(this.linkGen(0, indexFinSection2, 1))
    links.push(this.linkGen(indexFinSection1 , indexFinSection1 + 1, 1))

    // lien phosphate
    
    // premier segment du ncm de gauche
    for (let i of range(0, indexFinSection1)) {
      links.push(this.linkGen(i, i + 1, 2))
    }

    // deuxieme segment du ncm de gauche
    for (let i of this.range(indexFinSection1 +1 // index debut du 2e segment
                              , indexFinSection2)) {
      links.push(this.linkGen(i, i + 1, 2))
    }

    // loop
    for (let i of range(indexFinSection2, indexFinSection2 + loop.length - 1)) {
      links.push(this.linkGen(i, i + 1, 2))
    }


    // connecter les deux ncm
    links.push(this.linkGen(indexFinSection2 + loop.length - 1, 0))

    console.log("Links : ", links)

    return links

  }
  

  nodeGen = function (name, group) {

    return { "id": name, "group": group }

  }

  linkGen = function (source, target, value) {

    return { "source": source, "target": target, "value": value }

  }

  //--------------------------------------------------------- core

  
  move = () => {
    this.shuffle()
    setTimeout(() => { this.shuffleStop(this.interval_motion) }, 2000);
  /*
  for (let i = 0; i < 300; i++) {
    this.shuffle()
    setTimeout(() => { this.shuffleStop(this.interval_motion) }, 20);
  }
  */
}

  shuffle = () => {

    this.force.restart()
    this.force.alpha(0.1)
    if (this.graph.nodes.length < 200) {
      this.interval_motion = setInterval(() => {

        this.graph.nodes.forEach(this.motion);
        this.force.restart()

      }, 5);
    }
    else {
      this.graph.nodes.forEach(this.motion)
      this.force.restart()
    }
}

  shuffleStop = (interval_motion) => {
  clearInterval(interval_motion);
}

  motion = ( e, index, array) => {
  if (e.vx > 5) { e.vx = 5 }
  if (e.vy > 5) { e.vy = 5 }
  e.x = e.x + e.vx;
  e.y = e.y + e.vy;
  //console.log(e.x)
  //console.log(e.y)
    e.vx = e.vx + 10 * ((Math.random() - 0.5)/5 - ((e.x - this.width * 0.5) / this.width * 0.5))/5;
    e.vy = e.vy + 10 * ((Math.random() - 0.5)/5 - ((e.y - this.height * 0.5) / this.height * 0.5))/5;
}


 createGraph = (element) => {


   let ticked = () => {
     link
       .attr("x1", function (d: any) { return d.source.x; })
       .attr("y1", function (d: any) { return d.source.y; })
       .attr("x2", function (d: any) { return d.target.x; })
       .attr("y2", function (d: any) { return d.target.y; });

     node
       .attr("cx", function (d: any) { return d.x; })
       .attr("cy", function (d: any) { return d.y; });

     text
       .attr("x", (d, i) => { return this.graph.nodes[i].x - 8 })
       .attr("y", (d, i) => { return this.graph.nodes[i].y + 8 })
   }

   let dragstarted = (d: any) => {
     if (!d3.event.active) simulation.alphaTarget(0.3).restart();
     d.fx = d.x;
     d.fy = d.y;
   }

   let dragged = (d: any) => {
     d.fx = d3.event.x;
     d.fy = d3.event.y;
   }

   let dragended = (d: any) => {
     if (!d3.event.active) simulation.alphaTarget(0);
     d.fx = null;
     d.fy = null;
   }

  const svg = d3.select(element).append('svg')
    .attr('width', this.width)
    .attr('height', this.height);


  let simulation = d3.forceSimulation()
    .force("link", d3.forceLink().distance(20))
    .force("charge", d3.forceManyBody().strength(-100))
    .force("center", d3.forceCenter(this.width / 2, this.height / 2));

  let link = svg.append("g")
    .attr("class", "links")
    .selectAll("line")
    .data(this.graph.links)
    .enter().append("line")
    .attr("stroke-width", function (d: Link) { return Number(d.value) + 1 });


  console.log("nodes : ", this.graph.nodes)

   let myDrag = function(e, i):any{
     d3.drag()
       .on("start", dragstarted)
       .on("drag", dragged)
       .on("end", dragended)(e,i)
   }

  let node = svg.append("g")
    .attr("class", "nodes")
    .selectAll("circle")
    .data(this.graph.nodes)
    .enter().append("circle")
    .attr("r", function (d: Node) { return Number(d.group) * 5 + 8; })
    .attr("fill", fillcolorNode)
    .attr("stroke-opacity", 1)
    .attr("stroke", "#000000")
    .attr("stroke-width", 1)
    .call(myDrag);

  let text = svg.append('g').attr('class', 'label_g')
    .selectAll("text")
    .data(this.graph.nodes)
    .enter()
    .append("text")
    .style("cursor", "pointer")
    .attr("id", "label")
    .call(myDrag);


  text
    .text((d: Node) => { return d.id; })
    .attr("font-family", "sans-serif")
    .attr("font-size", "20px")
    .attr("font-weigth", "bold")
    .attr("fill", "black")
    .call(myDrag);



  node.append("title")
    .text(function (d: Node) { return d.id; });

  simulation
    .nodes(this.graph.nodes)
    .on("tick", ticked);

   simulation.force<d3.ForceLink<any, any>>('link').links(this.graph.links);

   this.force = simulation;

  svg.append("rect")
    .style("fill", fillcolorRect(this.score))
    .attr("width", 50)
    .attr("height", 50)
    .attr("x", 5)
    .attr("y", 5)
    .on('click', this.move);

 } ;

}
