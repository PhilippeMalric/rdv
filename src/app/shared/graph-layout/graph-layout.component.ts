import { Component, OnInit, ViewEncapsulation, OnChanges, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';
import * as d3 from 'd3';
import { Graph } from '../../objectDef/Graph';
import { Node } from '../../objectDef/Node';
import { Link } from '../../objectDef/Link';
import { Ncm } from '../../objectDef/Ncm';
import { LNode } from '@angular/core/src/render3/interfaces/node';

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

  //fonction util
  color = d3.scaleOrdinal(d3.schemeCategory10);

  colorScale = d3.scaleLinear<string>()
    .domain([0, 1])
    .range(['red', 'blue'])
    .interpolate(d3.interpolateHcl);

  fillcolorNode = (d: Node) => {
  if (d.group == 1) {
    return "gainsboro"
  }
  else {

    return this.colorScale(Number(this.score))
    }

  }

  fillcolorRect = () => {
      return this.colorScale(Number(this.score))
    }
  range = (start, end) => Array.from({ length: (end - start) }, (v, k) => k + start);

  ngOnInit() {

    console.log("id : ", this._id)
    console.log("score : ", this.score)

  }

  ngAfterViewInit() {

    console.log("id : " + this._id)
    this.fromMergedToGraphLayout(this._id);

  }


  nCMfilterD = {
    "-&-": 1,
    "noVG_notPaired&-": 1,
    "Premier_notPaired&-":1,
  }
 


  fromMergedToGraphLayout = function (merged: string) {

    let graphLayout = {}

    if (! (merged in this.nCMfilterD)) {
      if (merged.indexOf("&") != -1) {

        this.manageMerged(merged)

      }
      else {

        this.unNcm_tx_togL(merged)

      }
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
      if ("---" in this.ncm1) {


        //createNodesLoopG(loop,s1, s2,pos)

      }
      if ("---" in this.ncm2) {
        //createNodesLoopD(loop,s1,s2,pos)
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

    for (let i of this.range(0,seq.length - 1)) {

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


    let graph = { "nodes": nodeTab, "links": linkTab }

    if (!graph.nodes) {
      graph = { "nodes": [], "links": [] }
    }
    console.log("graph : ", graph)

    const element = this.chartContainer.nativeElement;
    this.height = 200
    this.width = 200

    const svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);




    svg.append("rect")
      .style("fill", this.fillcolorRect())
      .attr("width", 50)
      .attr("height", 50)
      .attr("x", 5)
      .attr("y", 5)
      .on('click', (d, i) => {
        console.log("graph : ", graph)

        console.log("seq : ", seq, "pos : ", pos);
      });


    let simulation = d3.forceSimulation()
      .force("link", d3.forceLink().distance(20))
      .force("charge", d3.forceManyBody().strength(-20))
      .force("center", d3.forceCenter(this.width / 2, this.height / 2));

    let link = svg.append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(graph.links)
      .enter().append("line")
      .attr("stroke-width", function (d: Link) { return Number(d.value) + 1 });


    console.log("nodes : ", graph.nodes)

    let node = svg.append("g")
      .attr("class", "nodes")
      .selectAll("circle")
      .data(graph.nodes)
      .enter().append("circle")
      .attr("r", function (d: Node) { return Number(d.group) * 5 + 8; })
      .attr("fill", this.fillcolorNode)
      .attr("stroke-opacity", 1)
      .attr("stroke", "#000000")
      .attr("stroke-width", 1)
      .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

    let text = svg.append('g').attr('class', 'label_g')
      .selectAll("text")
      .data(graph.nodes)
      .enter()
      .append("text")
      .style("cursor", "pointer")
      .attr("id", "label")
      .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));


    text
      .text((d) => { return d.id; })
      .attr("font-family", "sans-serif")
      .attr("font-size", "20px")
      .attr("font-weigth", "bold")
      .attr("fill", "black")
      .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));



    node.append("title")
      .text(function (d: Node) { return d.id; });

    simulation
      .nodes(graph.nodes)
      .on("tick", ticked);

    simulation.force<d3.ForceLink<any, any>>('link').links(graph.links);



    function ticked() {
      link
        .attr("x1", function (d) { return d.source.x; })
        .attr("y1", function (d) { return d.source.y; })
        .attr("x2", function (d) { return d.target.x; })
        .attr("y2", function (d) { return d.target.y; });

      node
        .attr("cx", function (d) { return d.x; })
        .attr("cy", function (d) { return d.y; });

      text
        .attr("x", (d, i) => { return graph.nodes[i].x - 8 })
        .attr("y", (d, i) => { return graph.nodes[i].y + 8 })
    }

    function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    function dragended(d) {
      if (!d3.event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }


  }

  createRedCircle() {

    const element = this.chartContainer.nativeElement;
    this.height = 200
    this.width = 200

    const svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);

    svg.append("circle").attr("cx", function (d) { return 100; })
      .attr("cy", function (d) { return 100; })
      .attr("r", function (d) { return 100; })
      .style("fill", function (d) { return "red"; });

  }


  deuxNcm_tx_togL =  (s11: String, s12: String, s21: String, s22: String, pos: string) => {

    let nodeTab = []
    let linkTab = []
    console.log("s : ", s11, s12, s21, s22)


    nodeTab = this.createNodes2(s11, s12, s21, s22, pos)
    linkTab = this.createLinks2(s11, s12, s21, s22)


    let graph = { "nodes": nodeTab, "links": linkTab }

    if (!graph.nodes) {
      graph = { "nodes": [], "links": [] }
    }

    const element = this.chartContainer.nativeElement;
    this.height = 200
    this.width = 200

    const svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);

    svg.append("rect")
      .style("fill", this.fillcolorRect())
      .attr("width", 30)
      .attr("height", 30)
      .attr("x", 5)
      .attr("y", 5)
      .on('click',  (d, i) => {

        console.log("ncm1 : ", this.ncm1, " ncm2 : ", this.ncm2)
        console.log("linkTab : ")
        console.log( linkTab)
    });


    let color = d3.scaleOrdinal(d3.schemeCategory10);

    let simulation = d3.forceSimulation()
      .force("link", d3.forceLink().distance(20))
      .force("charge", d3.forceManyBody().strength(-30))
      .force("center", d3.forceCenter(this.width / 2, this.height / 2));

    let link = svg.append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(graph.links)
      .enter().append("line")
      .attr("stroke-width", function (d) { return d.value + 1 });


    console.log("nodes : ", graph.nodes)


    

    let node = svg.append("g")
      .attr("class", "nodes")
      .selectAll("circle")
      .data(graph.nodes)
      .enter().append("circle")
      .attr("r", function (d) { return d.group * 5 + 8; })
      .attr("fill", this.fillcolorNode)
      .attr("stroke-opacity", 1)
      .attr("stroke", "#000000")
      .attr("stroke-width", 1)
      .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

    let text = svg.append('g').attr('class', 'label_ss_g')
              .selectAll("text")
              .data(graph.nodes)
              .enter()
              .append("text")
              .style("cursor", "pointer")
              .attr("id", "label")
              .call(d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended));


    text
      .text( (d) =>  { return d.id; })
      .attr("font-family", "sans-serif")
      .attr("font-size", "20px")
      .attr("font-weigth", "bold")
      .attr("fill", "black")
      .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

    node.append("title")
      .text(function (d) { return d.id; });

    simulation
      .nodes(graph.nodes)
      .on("tick", ticked);

    simulation.force<d3.ForceLink<any, any>>('link').links(graph.links);

    
  function ticked() {
    link
      .attr("x1", function (d) { return d.source.x; })
      .attr("y1", function (d) { return d.source.y; })
      .attr("x2", function (d) { return d.target.x; })
      .attr("y2", function (d) { return d.target.y; });

    node
      .attr("cx", function (d) { return d.x; })
      .attr("cy", function (d) { return d.y; });

    text
      .attr("x", (d, i) => { return graph.nodes[i].x - 8 })
      .attr("y", (d, i) => { return graph.nodes[i].y + 8 })
  }

  function dragstarted(d) {
    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  }

  function dragended(d) {
    if (!d3.event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }

    

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
    for (let i of this.range(0, index2eLink1)) {
      links.push(this.linkGen(i, i + 1, 2))
    }

    // deuxieme segment (dernier si on considere les 2 NCM en tournant dans le sens des aiguilles d'une montre)
    for (let i of this.range(index2eLink2, l_s1 - 1)) {
      links.push(this.linkGen(i, i + 1, 2))
    }

    // troisieme segment
    for (let i of this.range(l_s1, l_s1 + s21.length - 2)) {
      links.push(this.linkGen(i, i + 1, 2))
    }

    // quatrieme segment

    for (let i of this.range(l_s1 + s21.length-1, l_s1 + l_s2 - 3)) {
      links.push(this.linkGen(i, i + 1, 2))
    }

    // connecter les deux ncm
    links.push(this.linkGen(index2eLink1, l_s1, 2))
    links.push(this.linkGen(index2eLink2, l_s1 + l_s2 - 3, 2))

    console.log("Links : ", links)

    return links

  }

  /*
  createNodesLoopG = function (loop: String, s21: String, s22: String, pos: string) {
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

    // create Link



    let nodeTab = []
    let linkTab = []
    console.log("s : ", s11, s12, s21, s22)


    nodeTab = this.createNodes2(s11, s12, s21, s22, pos)
    linkTab = this.createLinks2(s11, s12, s21, s22)


    let graph = { "nodes": nodeTab, "links": linkTab }

    if (!graph.nodes) {
      graph = { "nodes": [], "links": [] }
    }

    const element = this.chartContainer.nativeElement;
    this.height = 200
    this.width = 200

    const svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);

    svg.append("rect")
      .style("fill", this.fillcolorRect())
      .attr("width", 30)
      .attr("height", 30)
      .attr("x", 5)
      .attr("y", 5)
      .on('click', (d, i) => {

        console.log("ncm1 : ", this.ncm1, " ncm2 : ", this.ncm2)
        console.log("linkTab : ")
        console.log(linkTab)

      }
   }


  createLinksLoopG = function (loop: String, s21: String, s22: String) {

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
    for (let i of this.range(0, index2eLink1)) {
      links.push(this.linkGen(i, i + 1, 2))
    }

    // deuxieme segment (dernier si on considere les 2 NCM en tournant dans le sens des aiguilles d'une montre)
    for (let i of this.range(index2eLink2, l_s1 - 1)) {
      links.push(this.linkGen(i, i + 1, 2))
    }

    // troisieme segment
    for (let i of this.range(l_s1, l_s1 + s21.length - 2)) {
      links.push(this.linkGen(i, i + 1, 2))
    }

    // quatrieme segment

    for (let i of this.range(l_s1 + s21.length - 1, l_s1 + l_s2 - 3)) {
      links.push(this.linkGen(i, i + 1, 2))
    }

    // connecter les deux ncm
    links.push(this.linkGen(index2eLink1, l_s1, 2))
    links.push(this.linkGen(index2eLink2, l_s1 + l_s2 - 3, 2))

    console.log("Links : ", links)

    return links

  }


  createNodesLoopD = function (loop: String, s1: String, s2: String, pos: string) {
    let nodes = []


    console.log("nodes creation")
    for (let c of loop.split("")) {

      nodes.push(this.nodeGen(c, 1))

    }
    for (let c of s1.split("")) {

      nodes.push(this.nodeGen(c, 1))

    }

    for (let c of s2.split("").slice(1)) {

      nodes.push(this.nodeGen(c, 1))

    }

    console.log("nodes : ", nodes)

    nodes[Number(pos)].group = 2
    
    let nodeTab = nodes
    let linkTab = this.createLinksLoopD(loop, s1, s2)
    console.log("s : ",loop, s1, s2)


    nodeTab = this.createNodes2(s11, s12, s21, s22, pos)
    linkTab = this.createLinks2(s11, s12, s21, s22)


    let graph = { "nodes": nodeTab, "links": linkTab }

    if (!graph.nodes) {
      graph = { "nodes": [], "links": [] }
    }

    const element = this.chartContainer.nativeElement;
    this.height = 200
    this.width = 200

    const svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);

    svg.append("rect")
      .style("fill", this.fillcolorRect())
      .attr("width", 30)
      .attr("height", 30)
      .attr("x", 5)
      .attr("y", 5)
      .on('click', (d, i) => {

        console.log("ncm1 : ", this.ncm1, " ncm2 : ", this.ncm2)
        console.log("linkTab : ")
        console.log(linkTab)

      }

  }


  createLinksLoopD = function (loop: String, s1: String, s2: String) {

    let links = []
    console.log("Links creation")

    let l_s1 = s1.length + s2.length
    let l_s2 = s21.length + s22.length

    let index2eLink1 = s11.length - 1
    let index2eLink2 = s11.length

    // lien des paires de bases
    links.push(this.linkGen(0, l_s1 - 1, 1))
    links.push(this.linkGen(index2eLink1, index2eLink2, 1))
    links.push(this.linkGen(l_s1 + s21.length - 2, l_s1 + s21.length - 1, 1))

    // lien phosphate

    // premier segment
    for (let i of this.range(0, index2eLink1)) {
      links.push(this.linkGen(i, i + 1, 2))
    }

    // deuxieme segment (dernier si on considere les 2 NCM en tournant dans le sens des aiguilles d'une montre)
    for (let i of this.range(index2eLink2, l_s1 - 1)) {
      links.push(this.linkGen(i, i + 1, 2))
    }

    // troisieme segment
    for (let i of this.range(l_s1, l_s1 + s21.length - 2)) {
      links.push(this.linkGen(i, i + 1, 2))
    }

    // quatrieme segment

    for (let i of this.range(l_s1 + s21.length - 1, l_s1 + l_s2 - 3)) {
      links.push(this.linkGen(i, i + 1, 2))
    }

    // connecter les deux ncm
    links.push(this.linkGen(index2eLink1, l_s1, 2))
    links.push(this.linkGen(index2eLink2, l_s1 + l_s2 - 3, 2))

    console.log("Links : ", links)

    return links

  }


  nodeGen = function (name, group) {

    return { "id": name, "group": group }

  }

  linkGen = function (source, target, value) {

    return { "source": source, "target": target, "value": value }

  }

  */


}
