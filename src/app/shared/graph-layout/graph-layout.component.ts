import { Component, OnInit, ViewEncapsulation, OnChanges, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';
import * as d3 from 'd3';
import { Graph } from '../../objectDef/Graph';
import { Node } from '../../objectDef/Node';

@Component({
  selector: 'app-graph-layout',
  templateUrl: './graph-layout.component.html',
  styleUrls: ['./graph-layout.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GraphLayoutComponent implements OnInit, AfterViewInit {

  @ViewChild('chart') private chartContainer: ElementRef;
  @Input() private data: String;
  private width: number;
  private height: number;
  private graph: Graph;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {

    this.fromMergedToGraphLayout(this.data);

  }

  fromMergedToGraphLayout = function (merged: String) {

    let graphLayout = {}


    if (merged.indexOf("&-") != -1) {

      this.manageMerged(merged)

    }
    else {

      this.createRedCircle()

    }

  }

  manageMerged = function (merged: String) {

    let stringSplited = merged.split("&")
    let ncm1 = stringSplited[0]
    let ncm2 = stringSplited[1]
    let ncm1_splitted = ncm1.split("-")
    let ncm2_splitted = ncm2.split("-")


    let ncm1_end = ""
    let pos = "";
    if (ncm1_splitted.length > 2 && ncm1_splitted[1].length > 1) {

      ncm1_end = ncm1_splitted[2].split("_")[0]
      pos = ncm1_splitted[2].split("_")[1].split("pos")[0]
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
      this.createRedCircle()
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


  deuxNcm_tx_togL = function (s11: String, s12: String, s21: String, s22: String, pos: string) {

    let nodeTab = []
    let linkTab = []
    console.log("s : ", s11, s12, s21, s22)


    nodeTab = this.createNodes2(s11, s12, s21, s22, pos)
    linkTab = this.createLinks2(s11, s12, s21, s22)


    let graph = { "nodes": nodeTab, "links": linkTab }


    const element = this.chartContainer.nativeElement;
    this.height = 200
    this.width = 200

    const svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);

    let color = d3.scaleOrdinal(d3.schemeCategory10);

    let simulation = d3.forceSimulation()
      .force("link", d3.forceLink().distance(20))
      .force("charge", d3.forceManyBody().strength(-10))
      .force("center", d3.forceCenter(this.width/2 , this.height/2 ));

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
      .attr("r", function (d) { return d.group * 5 + 5; })
      .attr("fill", function (d) { return color(d.group); })
      .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

    //node.append("title")
      //.text(function (d) { return d.id; });

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

  range = (start, end) => Array.from({ length: (end - start) }, (v, k) => k + start);

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

    for (let i of this.range(l_s1 + s21.length, l_s1 + l_s2 - 2)) {
      links.push(this.linkGen(i, i + 1, 2))
    }

    // connecter les deux ncm
    links.push(this.linkGen(index2eLink1, l_s1 + s21.length - 2, 2))
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




}
