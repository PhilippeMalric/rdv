import * as d3 from 'd3';
import { RGBColor } from 'd3';


//--------------------------------------------------------------Debut des fonctions generique (voir helper aussi)

export function mouseOverF (d, i) {
  //console.log(d)

  //return ilumineNt(d,i);
}



export function mouseOutF (d, i) {
  //console.log(d)
  //ntColorSwitch = (ntColorSwitch +2) % 3
  //changeNodeColor()
}

export function ilumineNt (d, i, secStructSelected_int, nt_mcff) {
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
export function ligthNt (n) {
  this.svg_ss.select("#_" + n).attr("fill", this.ntColorLigth)
}

export function ligthNt2 (n) {
  this.svg_ss.select("#_" + n).attr("fill", this.ntColorLigth2)
}
export function darkNt (n) {
  this.svg_ss.select("#_" + n).attr("fill", this.ntColorDark)
}

export function getNtBetween (i, j) {
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

export function ntColorLigth (d, i) {
  console.log(d)
  return d3.rgb(d.color).brighter(2)
}
export function ntColorLigth2 (d, i) {
  console.log(d)
  return d3.rgb(d.color).brighter(4)
}
export function ntColorDark (d, i) {
  console.log(d)
  return d3.rgb(d.color).brighter(3)
}

export function google_colors(n) {
  let colores_g = ["#3075ff", "#ff5d35", "#ff16dc", "#109618"];
  return colores_g[n % colores_g.length];
}

export function filterMinus1(tab) {
  let newTab = []
  for (let i in tab) {
    if (tab[i] != -999) {
      newTab.push(tab[i])
    }
  }
  return newTab
}

export function ntColor (d, i, pos) {
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

export function click_ss(d, secStructSelected_int) {

  //console.log(d)
  let soft = null
  let ncm_droit = null
  let ncm_gauche = null

  if (secStructSelected_int < nt_mcff) {
    soft = "mcff_detail/"
    ncm_droit = d.ncm_mcff[secStructSelected_int].ncm.droit
    ncm_gauche = d.ncm_mcff[secStructSelected_int].ncm.gauche
  }
  else {
    soft = "so_detail/"
    ncm_droit = d.ncm_so[secStructSelected_int - nt_mcff].ncm.droit
    ncm_gauche = d.ncm_so[secStructSelected_int - nt_mcff].ncm.gauche

  }

  console.log(soft)
  d3.select("#svgStat").append("text").attr("class", "wait").attr("x", 50).attr("y", 50).text("wait").style("font-size", "25px")


  let getLabelHi = function (x) {
    if (x.label == "Hi" && x.freq > 0.4) {
      return true
    }
    return false
  }

  let getLabelLow = function (x) {
    if (x.label == "Low" && x.freq > 0.4) {
      return true
    }
    return false
  }

  var getLabelBg = function (x) {
    if (x.label == "Bg" && x.freq > 0.4) {
      return true
    }
    return false
  }

  d3.selectAll(".ncm_stat").remove()
  d3.selectAll(".WrongNtUrl").remove()

  

  jQuery.get("http://majsrv1.iric.ca:3000/" + soft + ncm_gauche, function (data) {
    let divHi = null
    let divLow = null
    d3.select(".wait").remove()

    let showNcm = function (d, i) {
      d3.selectAll(".WrongNtUrl").remove()
      console.log("low : " + low.length)
      console.log("hi : " + hi.length)
      console.log("bg : " + bg.length)
      if (hi.length + low.length + bg.length > 0) {
        console.log("len over 100")
        console.log("len over 0")
        if (hi.length > low.length / 4) {
          console.log("inside hi")
          divHi = d3.select("#hiDiv")
          divHi
            .append("p").attr("class", "WrongNtUrl")
            .text("Hi")
          hi = hi.filter(filT250).slice(0, 10)
          divHi.selectAll("p").data(hi).enter().append("p").append("a").attr("href", function (d) { return d.url }).attr("target", "_blank").attr("class", "WrongNtUrl")
            .text(function (d) { return d.url })
          divLow = d3.select("#lowDiv")
          divLow
            .append("p").attr("class", "WrongNtUrl")
            .text("Low")
          low = low.filter(filT250).slice(0, 10)
          divLow.selectAll("p").data(low).enter().append("p").append("a").attr("href", function (d) { return d.url }).attr("target", "_blank").attr("class", "WrongNtUrl")
            .text(function (d) { return d.url })
        }
        else {
          console.log("inside low")
          divHi = d3.select("#hiDiv")
          divHi
            .append("p").attr("class", "WrongNtUrl")
            .text("Hi")
          hi = hi.filter(filT250).slice(0, 10)
          d3.select("#hiDiv").selectAll("p").data(hi).enter().append("p").append("a").attr("href", function (d:any) { return d.url }).attr("target", "_blank").attr("class", "WrongNtUrl")
            .text(function (d:any) { return d.url })
          divLow = d3.select("#lowDiv")
          divLow
            .append("p").attr("class", "WrongNtUrl")
            .text("Low")
          low = low.filter(filT250).slice(0, 10)
          divLow.selectAll("p").data(low).enter().append("p").append("a").attr("href", function (d) { return d.url }).attr("target", "_blank").attr("class", "WrongNtUrl")
            .text(function (d) { return d.url })

        }
      }
      else {
        d3.select("body").append("div").attr("class", "WrongNtUrl").append("p").append("text").text("no data")
      }

    }

    //console.log(data)
    var hi = data.filter(getLabelHi)
    var low = data.filter(getLabelLow)
    var bg = data.filter(getLabelBg)
    let ncmStat = d3.select("#svgStat").append("g").attr("class", "ncm_stat").attr("transform", function (d, i) { return "translate(" + 0 + "," + 0 + ")"; });
    ncmStat.on("click", showNcm).style("cursor", "pointer")
    ncmStat.append("text").attr("dy", ".35em").attr("x", 660).attr("y", 10).text("3'").style("font-size", "35px")
    ncmStat.append("text").attr("dy", ".35em").attr("x", 700).attr("y", 10).text(ncm_gauche).style("font-size", "30px").style("font-weight", "bold")
    ncmStat.append("text").attr("dy", ".35em").attr("x", 670).attr("y", 50).text("Hi count : " + hi.length).style("font-size", "25px")
    ncmStat.append("text").attr("dy", ".35em").attr("x", 870).attr("y", 50).text("Low count : " + low.length).style("font-size", "25px")
    ncmStat.append("text").attr("dy", ".35em").attr("x", 1070).attr("y", 50).text("Bg count : " + bg.length).style("font-size", "25px")
    ncmStat.append("rect")
      .attr("x", 650)
      .attr("y", 5)
      .attr("width", 5)
      .attr("height", 90)
      .attr("fill", "black");


    ncmStat.append("rect")
      .attr("x", 990)
      .attr("y", 5)
      .attr("width", 100)
      .attr("height", 20)
      .attr("fill", "grey");

    ncmStat.append("rect")
      .attr("x", 990)
      .attr("y", 5)
      .attr("width", blackRect(hi, low))
      .attr("height", 20)
      .attr("fill", "black");


  })

  var blackRect = function (hi, low) {
    if (hi.length + low.length > 0) {
      return hi.length / (hi.length + (low.length / 4)) * 100
    }
    else {
      return 0
    }
  }

  var filT250 = function (d) {

    let s = d.url.split("3000/")[1]
    let s1 = s.split("|")[1]
    let n = Number(s1)
    if (n < 2500) { return true }
    else { return false }

  }

  jQuery.get("http://majsrv1.iric.ca:3000/" + soft + ncm_droit, function (data) {

    let divHi = null
    let divLow = null

    d3.select(".wait").remove()

    let showNcm = function (d, i) {
      d3.selectAll(".WrongNtUrl").remove()
      if (hi.length + low.length + bg.length > 0) {
        console.log("len over 0")
        if (hi.length > low.length / 4) {
          console.log("inside hi")
          divHi = d3.select("#hiDiv")
          divHi
            .append("p").attr("class", "WrongNtUrl")
            .text("Hi")
          hi = hi.filter(filT250).slice(0, 10)
          divHi.selectAll("p").data(hi).enter().append("p").append("a").attr("href", function (d) { return d.url }).attr("target", "_blank").attr("class", "WrongNtUrl")
            .text(function (d) { return d.url })
          divLow = d3.select("#lowDiv")
          divLow
            .append("p").attr("class", "WrongNtUrl")
            .text("Low")
          low = low.filter(filT250).slice(0, 10)
          divLow.selectAll("p").data(low).enter().append("p").append("a").attr("href", function (d) { return d.url }).attr("target", "_blank").attr("class", "WrongNtUrl")
            .text(function (d) { return d.url })
        }
        else {
          console.log("inside low")
          divHi = d3.select("#hiDiv")
          divHi
            .append("p").attr("class", "WrongNtUrl")
            .text("Hi")
          hi = hi.filter(filT250).slice(0, 10)
          divHi.selectAll("p").data(hi).enter().append("p").append("a").attr("href", function (d) { return d.url }).attr("target", "_blank").attr("class", "WrongNtUrl")
            .text(function (d) { return d.url })
          divLow = d3.select("#lowDiv")
          divLow
            .append("p").attr("class", "WrongNtUrl")
            .text("Low")
          low = low.filter(filT250).slice(0, 10)
          divLow.selectAll("p").data(low).enter().append("p").append("a").attr("href", function (d) { return d.url }).attr("target", "_blank").attr("class", "WrongNtUrl")
            .text(function (d) { return d.url })

        }
      }
      else {
        d3.select("body").append("div").attr("class", "WrongNtUrl").append("p").append("text").text("not enough data")
      }

    }

      //console.log(data)
    let hi = data.filter(getLabelHi)
    let low = data.filter(getLabelLow)
    let bg = data.filter(getLabelBg)

    let ncmStat = d3.select("#svgStat").append("g").attr("class", "ncm_stat").attr("transform", function (d, i) { return "translate(" + 0 + "," + 0 + ")"; });
    ncmStat.on("click", showNcm).style("cursor", "pointer")
    ncmStat.append("text").attr("dy", ".65em").attr("x", 5).attr("y", 10).text("5'").style("font-size", "35px")
    ncmStat.append("text").attr("dy", ".65em").attr("x", 45).attr("y", 10).text(ncm_droit).style("font-size", "30px").style("font-weight", "bold")
    ncmStat.append("text").attr("dy", ".65em").attr("x", 10).attr("y", 50).text("Hi count : " + hi.length).style("font-size", "25px")
    ncmStat.append("text").attr("dy", ".65em").attr("x", 200).attr("y", 50).text("Low count : " + low.length).style("font-size", "25px")
    ncmStat.append("text").attr("dy", ".65em").attr("x", 400).attr("y", 50).text("Bg count : " + bg.length).style("font-size", "25px")

    ncmStat.append("rect")
      .attr("x", 380)
      .attr("y", 5)
      .attr("width", 100)
      .attr("height", 20)
      .attr("fill", "grey");

    ncmStat.append("rect")
      .attr("x", 380)
      .attr("y", 5)
      .attr("width", blackRect(hi, low))
      .attr("height", 20)
      .attr("fill", "black");

    console.log(hi)
  })
}


var svg_ss = null
var nt_mcff = null

let folder1 = ""
let id = ""
//d3.json("/JSON_FOLDER_10_9_poids/"+id+".json",function(err,data){
export function plotRNA(data, reactivityErrorScaleColor, reactivityScaleColor, ntColor, filterMinus1, nodes_ss, pos, mouseOverF, mouseOutF, width_gt, force_gt, circleRadius_gt, gap_gt) {
  let changeNodeColor = function (ntColorSwitch) {
    console.log("ntcolorSwitch " + ntColorSwitch)

    if (ntColorSwitch == 2) { ntColorSwitch = 0 }
    else {
      if (ntColorSwitch == 0) { ntColorSwitch = 1 }
      else {
        if (ntColorSwitch == 1) { ntColorSwitch = 2 }
      }
    }


    let color = null
    console.log("ntcolorSwitch " + ntColorSwitch)
    d3.selectAll(".nodes_ss")
      .attr('fill', function (d:any, i) {
        if (ntColorSwitch == 1) {
          if (d.score == -999) {
            color = "grey"
            d.color = color
            return color
          }
          color = reactivityScaleColor(d.score)
          d.color = color
          return color;
        }
        if (ntColorSwitch == 0) {
          color = ntColor(d, i)
          d.color = color
          return color;
        }
        if (ntColorSwitch == 2) {
          if (d.score == -999) {
            color = "grey"
            d.color = color
            return color
          }
          color = reactivityErrorScaleColor(d.erreur)
          d.color = color
          return color;
        }
      })
    }
  let jsonData = data



  let reactivityScaleWs_helper = d3.scaleLinear()
    .domain([0, 1])
    .range([1, 4]);

  function reactivityScaleWs(secStructSelected_int, sc_so, sc_mcff) {
    if (secStructSelected_int < nt_mcff) {
      return reactivityScaleWs_helper(Math.abs(sc_mcff[secStructSelected_int]));
    }
    else {
      return reactivityScaleWs_helper(Math.abs(sc_so[secStructSelected_int - nt_mcff]));
    }

    }



  let filtered_score: [any] = filterMinus1(jsonData.scoreTab)
  let filtered_erreur: [any] = filterMinus1(jsonData.erreurTab)



    
    let reactivityScaleRay = d3.scaleLinear()
      .domain(d3.extent(filtered_score))
    .range([9, 13]);

  let mcff_gt_scale = null
  let so_gt_scale = null

    if (jsonData.sc_so) {
      let scoh = jsonData.sc_mcff.concat(jsonData.sc_so)

      let score_tab_mcff: number[] = jsonData.sc_mcff
      let score_tab_so: number[] = jsonData.sc_so

      mcff_gt_scale = d3.scaleLinear<RGBColor>()
        .domain(d3.extent(score_tab_mcff))
        .range([d3.rgb("green").darker(2), d3.rgb("green").brighter(3)]);

      so_gt_scale = d3.scaleLinear<RGBColor>()
        .domain(d3.extent(score_tab_so))
        .range([d3.rgb("red").darker(2), d3.rgb("red").brighter(3)]);
    }
    else {
      mcff_gt_scale = d3.scaleLinear<RGBColor>()
        .domain([0, 1])
        .range([d3.rgb("white"), d3.rgb("green")]);

      so_gt_scale = d3.scaleLinear<RGBColor>()
        .domain([0, 1])
        .range([d3.rgb("white"), d3.rgb("red")]);

  }

  //----------------------------------------------------------------------------ss
  //------------------------------------------------------addUrl
  
  d3.select("body").append("a")
        .attr("class","link")
        .attr("href", jsonData['url'])
        .html(jsonData['url'])
  

  let svg_ss = d3.select("#ss_svg")
  let width_ss = +$("#ss_svg").width() / 2;
  let height_ss = +$("#ss_svg").height();

  svg_ss.on("mouseup", shuffleStop)

  svg_ss.style("overflow-x", "scroll")

  //svg_ss.call(zoom)

  svg_ss.append("text")
    .attr("class", "mcff_legend")
    .style("font-size", "20px")
    .attr("text-anchor", "middle")
    .attr("dy", "0.35em")
    .attr("x", width_ss + width_ss / 2 + width_ss / 4)
    .attr("y", 10)
    .text("Mc-flashfold")
    .on("click", mcffState)
    .style("cursor", "pointer")


  let mcffOrSubopt = null


  let interval_scroll = null;
  let scrollOn = null;

  let scrollGt = function (d, i){
    clearInterval(interval_scroll);
    if (scrollOn) {
      scrollOn = false
      interval_scroll = setInterval(function () {
        secStructSelected_int += 1
        if (softSelected) {
          if (mcffOrSubopt) {
            secStructSelected_int = secStructSelected_int % nt_mcff
          }
          else { secStructSelected_int = (secStructSelected_int % nt_so) + nt_mcff }
        }
        else {
          secStructSelected_int = secStructSelected_int % soNumber
        }
        updateSS(secStructSelected_int)
      }, 50);
    }
    else {
      scrollOn = true
      clearInterval(interval_scroll);
    }
    force_ss.restart()
  }


  function mcffState(scrollGt, scrollOn) {
    scrollOn = true;
    softSelected = true;
    mcffOrSubopt = true;
    scrollGt()
  }
  function soState(secStructSelected_int, scrollOn, scrollGt) {
    secStructSelected_int = nt_mcff + 1
    scrollOn = true;
    softSelected = true;
    mcffOrSubopt = false;
    scrollGt()
  }

  function mcffOrSuboptChange() {
    if (mcffOrSubopt) { softSelected = true; mcffOrSubopt = false }
    else { mcffOrSubopt = true }
  }

  svg_ss.append("text")
    .attr("class", "so_legend")
    .style("font-size", "20px")
    .attr("text-anchor", "middle")
    .attr("dy", "0.35em")
    .attr("x", width_ss + width_ss / 4)
    .attr("y", 10)
    .text("RNA_sub_opt")
    .on("click", soState)
    .style("cursor", "pointer")

  svg_ss.append("text")
    .attr("class", "so_legend")
    .style("font-size", "20px")
    .attr("text-anchor", "middle")
    .attr("dy", "0.35em")
    .attr("x", width_ss + width_ss / 2 + 27)
    .attr("y", 10)
    .text("Both")
    .on("click", softSelectedChange)
    .style("cursor", "pointer")

  nt_mcff = data.d3ForceLayout2p.mcff.length;
  let secStructSelected_int = nt_mcff
  var nt_so = data.d3ForceLayout2p.rnaSubOpt.length;

  let soNumber = nt_mcff + nt_so;



  let links_ss = null
  if (secStructSelected_int < nt_mcff) {
    links_ss = data.d3ForceLayout2p.mcff[secStructSelected_int].slice();
  }
  else {
    links_ss = data.d3ForceLayout2p.rnaSubOpt[secStructSelected_int - nt_mcff].slice();
  }

  function getStrokeColor(i, tab1, tab2) {
    if (i < nt_mcff) {
      return tab1[i]
    }
    else {
      return tab2[i - nt_mcff]
    }
  }

  for (let node of data.seq.length) {
    
    nodes_ss[node] = {}
    nodes_ss[node].x = (Math.sin(node / 2) * node / 2) * 3 + width_ss / 2
    nodes_ss[node].y = (Math.cos(node / 2) * node / 2) * 3 + height_ss / 2
    nodes_ss[node].vx = 0
    nodes_ss[node].vy = 0
    nodes_ss[node].score = data.scoreTab[node]
    nodes_ss[node].erreur = data.erreurTab[node]
    nodes_ss[node].sorte = data.seq[node]
    nodes_ss[node].reactivity_pred = data.nts[node].reactivity_pred
    nodes_ss[node].prediction_color_so = data.nts[node].prediction_color_so
    nodes_ss[node].prediction_color_mcff = data.nts[node].prediction_color_mcff
    nodes_ss[node].ncm_so = data.nts[node].ncmTabDG_so
    nodes_ss[node].ncm_mcff = data.nts[node].ncmTabDG_mcff
    let test = data.nts[node].ncmTabDG_mcff
    nodes_ss[node].voisin_so = data.nts[node].voisinPairAllsub_so.ncm
    nodes_ss[node].voisin_mcff = data.nts[node].voisinPairAllsub_mcff
    nodes_ss[node].color = null
    nodes_ss[node].sc_pred_mcff = data.nts[node].sc_mcff
    nodes_ss[node].sc_pred_so = data.nts[node].sc_so

    //console.log(node + " : "+ graph.nodes[node].x)
  }



  function motion(e, index, array) {
    if (e.vx > 5) { e.vx = 5 }
    if (e.vy > 5) { e.vy = 5 }
    e.x = e.x + e.vx;
    e.y = e.y + e.vy;
    //console.log(e.x)
    //console.log(e.y)
    e.vx = e.vx + 10 * ((Math.random() - 0.5) - (e.x - width_ss * 0.5) / width_ss * 0.5);
    e.vy = e.vy + 10 * ((Math.random() - 0.5) - (e.y - height_ss * 0.5) / height_ss * 0.5);
  }




  var circleRadius_ss = 10;


  let force_ss = d3.forceSimulation()
    .force("charge", d3.forceManyBody().strength(-200))
    .force("center", d3.forceCenter(width_ss / 2, height_ss / 2))
    .force("y", d3.forceY(0))
    .force("x", d3.forceX(0))
    .stop()


  var links_ss_l = svg_ss.insert('g', ":first-child")
    .attr('class', 'links_ss_g')
    .selectAll("links_ss")
    .data(links_ss)
    .enter()
    .append("line")
    .attr('class', 'links_ss')
    .attr("stroke", "black");



  var nodes_ss_c = svg_ss.append('g')
    .attr('class', 'nodes_ss_g')
    .selectAll('circle')
    .data(nodes_ss)
    .enter()
    .append("circle")
    .attr("class", "nodes_ss")
    .attr("id", function (d, i) { return "_" + i })
    .attr("r", function (d:any, i) {
      if (i != pos) {
        if (d.score == -999) { return 11 }
        return reactivityScaleRay(d.score)
      }
      else { return 14 }
    })
    .attr("cx", function (d, i) { return (Math.sin(i / 2) * i / 2) * 3 - 5 + width_ss / 2 })
    .attr("cy", function (d, i) { return (Math.cos(i / 2) * i / 2) * 3 + 5 + height_ss / 2 })
    .attr('fill', ntColor)
    .attr('stroke', function (d:any, i) { return getStrokeColor(secStructSelected_int, d.prediction_color_mcff, d.prediction_color_so) })
    .attr('stroke-width', function (d:any, i) {
      if (d.score == -999) { return 2 }
      return reactivityScaleWs(secStructSelected_int, d.sc_pred_so, d.sc_pred_mcff)
    }
    )
    .attr('opacity', 0.9)
    .style("cursor", "pointer")
    .on("mouseover", mouseOverF)
    .on("mouseout", mouseOutF)
    .on("mousedown", click_ss)
    .call(d3.drag()
      .on("start", dragstarted_ss)
      .on("drag", dragged_ss)
      .on("end", dragended_ss));




  var text_ss = svg_ss.append('g').attr('class', 'label_ss_g')
    .selectAll("text")
    .data(nodes_ss)
    .enter()
    .append("text")
    .style("cursor", "pointer")
    .attr("id", "label_ss")
    .on("mouseout", mouseOutF)
    .on("mouseover", mouseOverF)
    .on("mousedown", click_ss)
    .call(d3.drag()
      .on("start", dragstarted_ss)
      .on("drag", dragged_ss)
      .on("end", dragended_ss));;
  var textLabels_ss = text_ss
    .attr("x", function (d, i) { return (Math.sin(i / 2) * i / 2) * 3 - 4 + width_ss / 2 - 10 })
    .attr("y", function (d, i) { return (Math.cos(i / 2) * i / 2) * 3 + 4 + height_ss / 2 + 10 })
    .text(function (d:any) { return d.sorte; })
    .attr("font-family", "sans-serif")
    .attr("font-size", "20px")
    .attr("font-weigth", "bold")
    .attr("fill", "black");


  var nodeSS_Text = function (d, i) {
    if (secStructSelected_int < nt_mcff) { return " |- " + d.reactivity_pred + " -|" + "Pos " + i + " | S: " + d.score + " |E :" + d.erreur + " | MCN gauche: " + d.ncm_mcff[secStructSelected_int].ncm.gauche + " | MCN droit: " + d.ncm_mcff[secStructSelected_int].ncm.droit + "|pred_mcff " + Math.round(d.sc_pred_mcff[secStructSelected_int] * 100) / 100; }
    else { return " |- " + d.reactivity_pred + " -|" + "Pos " + i + " | S: " + d.score + " |E :" + d.erreur + " | MCN gauche: " + d.ncm_so[secStructSelected_int - nt_mcff].ncm.gauche + " | MCN droit: " + d.ncm_so[secStructSelected_int - nt_mcff].ncm.droit + "|pred_so " + Math.round(d.sc_pred_so[secStructSelected_int - nt_mcff] * 100) / 100; }
  }

  nodes_ss_c.append("title")
    .text(nodeSS_Text);

  textLabels_ss.append("title")
    .text(nodeSS_Text);


  force_ss
    .nodes(nodes_ss)
    .on("tick", ticked_ss);

  force_ss
    .force("link", d3.forceLink(links_ss).distance(20).strength(5))

  //force_ss.restart()

  links_ss_l.filter(function (d:any) { return d.value == 2 })
    .attr("x1", function (d:any) {
      var xPos = d.source.x;
      if (xPos < 0) return 0;
      if (xPos > (width_ss - circleRadius_ss)) return (width_ss - circleRadius_ss);
      return xPos;
    })
    .attr("y1", function (d:any) {
      var yPos = d.source.y;
      if (yPos < 0) return 0;
      if (yPos > (height_ss - circleRadius_ss)) return (height_ss - circleRadius_ss);
      return yPos;
    })
    .attr("x2", function (d:any) {
      var xPos = d.target.x;
      if (xPos < 0) return 0;
      if (xPos > (width_ss - circleRadius_ss)) return (width_ss - circleRadius_ss);
      return xPos;
    })
    .attr("y2", function (d:any) {
      var yPos = d.target.y;
      if (yPos < 0) return 0;
      if (yPos > (height_ss - circleRadius_ss)) return (height_ss - circleRadius_ss);
      return yPos;
    })
    .attr("stroke-width", 5);

  function dragstarted_ss(d) {
    d3.select(this).raise().classed("active", true);
    //force_ss.stop()
    force_ss.force("charge", d3.forceManyBody().strength(-100))
    force_ss.restart()
  }

  function dragged_ss(d) {
    force_ss.alpha(0.01)
    d3.select(this).attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);
  }

  function dragended_ss(d) {
    //force_ss.alpha(0.005)
    force_ss.force("charge", d3.forceManyBody().strength(-200))
    d3.select(this).classed("active", false);
  }

  function ticked_ss() {

    links_ss_l
      .attr("x1", function (d:any) {
        var xPos = d.source.x;
        if (xPos < 0) return 0;
        if (xPos > (width_ss - circleRadius_ss)) return (width_ss - circleRadius_ss);
        return xPos;
      })
      .attr("y1", function (d:any) {
        var yPos = d.source.y;
        if (yPos < 0) return 0;
        if (yPos > (height_ss - circleRadius_ss)) return (height_ss - circleRadius_ss);
        return yPos;
      })
      .attr("x2", function (d:any) {
        var xPos = d.target.x;
        if (xPos < 0) return 0;
        if (xPos > (width_ss - circleRadius_ss)) return (width_ss - circleRadius_ss);
        return xPos;
      })
      .attr("y2", function (d:any) {
        var yPos = d.target.y;
        if (yPos < 0) return 0;
        if (yPos > (height_ss - circleRadius_ss)) return (height_ss - circleRadius_ss);
        return yPos;
      });

    nodes_ss_c
      .attr("cx", function (d:any) {
        var xPos = d.x;
        if (xPos < 0) d.x = 0;
        if (xPos > (width_ss - circleRadius_ss)) d.x = (width_ss - circleRadius_ss);
        return d.x;
      })
      .attr("cy", function (d:any) {
        var yPos = d.y;
        if (yPos < 0) return 0;
        if (yPos > (height_ss - circleRadius_ss)) return (height_ss - circleRadius_ss);
        return yPos;
      });


    text_ss
      .attr("x", function (d, i) { return nodes_ss[i].x - 8 })
      .attr("y", function (d, i) { return nodes_ss[i].y + 8 })

  }
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  async function move() {
    for (let i = 0; i < 300; i++) {
      shuffle()
      await sleep(20);
      shuffleStop()
    }
  }


  d3.select("body")
    .on("keyup", function (event:any) {
      let keyName = event.key
      if (keyName === 'z') {
        move()

      }
    })
  d3.select("body")
    .on("keydown", function (event:any) {
      let keyName = event.key
      if (keyName === 'z') {
        shuffleStop()
      }
    })

  svg_ss.append("rect")
    .attr("class", "button")
    .style("cursor", "pointer")
    .attr("width", 30)
    .attr("height", 30)
    .attr("x", 30)
    .attr("y", 30)
    .attr("rx", 5) //rx and ry give the buttons rounded corners
    .attr("ry", 5)
    .attr("fill", "black")
    .on("mousedown", shuffle)
    .on("mouseup", shuffleStop)

  let rose:any = null
  rose = d3.rgb(160, 0, 255)
  svg_ss.append("rect")
    .attr("class", "button")
    .style("cursor", "pointer")
    .attr("width", 30)
    .attr("height", 30)
    .attr("x", 70)
    .attr("y", 30)
    .attr("rx", 5) //rx and ry give the buttons rounded corners
    .attr("ry", 5)
    .attr("fill", rose)
    .on("mousedown", shuffleStop2)


  let interval_motion: any = null

  function shuffle() {
    force_ss.restart()
    force_ss.alpha(0.1)
    if (nodes_ss.length < 200) {
      interval_motion = setInterval(function () {

        nodes_ss.forEach(motion);
        force_ss.restart()

      }, 5);
    }
    else {
      nodes_ss.forEach(motion)
      force_ss.restart()

    }
  }

  function shuffleStop() {
    clearInterval(interval_motion);
  }

  function shuffleStop2() {
    force_ss.stop()
    clearInterval(interval_motion);
  }


  //----------------------------------------------------------------------------gt
  function motionGT(e, index, array) {
    e.x = e.x + e.vx;

    //console.log(e)
    //console.log(e.y)
    let f = 1
    if (e.x < width_gt + width_gt / 2 + 5 && e.x > width_gt + width_gt / 2 - 5) { f = (e.p_int - 1.5) * 2 }
    if (e.x < width_gt + 100 || e.x > 2 * width_gt - 100) { f = (e.p_int - 1.5) * -500 }

    if (e.x < width_gt + width_gt / 2 && e.p_int == 1) { e.x = width_gt + width_gt / 2 + width_gt / 4 }
    if (e.x > width_gt + width_gt / 2 && e.p_int == 2) { e.x = width_gt + width_gt / 2 - width_gt / 4 }
    e.vx += (e.p_int - 1.5) * -1
    e.vx = e.vx + f * (Math.random() - 0.5);

  }

  let interval_motion_gt = null

  function shuffleGt() {
    stopGt = false
    force_gt.restart()
    force_gt.alpha(0.1)
    if (nodes_ss.length < 200) {
      interval_motion_gt = setInterval(function () {

        nodes_gt.forEach(motionGT);
        force_gt.restart()

      }, 10);
    }
    else {
      nodes_gt.forEach(motionGT)
      force_gt.restart()

    }
  }

  function shuffleStopGt() {
    clearInterval(interval_motion_gt);
  }
  var stopGt = false
  function shuffleStopGt_b() {
    clearInterval(interval_motion_gt);
    force_gt.stop()
    if (!stopGt) {
      stopGt = true
    }
  }


  let svg_gt = d3.select("#ss_svg")
  width_gt = +$("#ss_svg").width() / 2
  let height_gt = +$("#ss_svg").height()

  svg_gt.append("rect")
    .attr("class", "button")
    .style("cursor", "pointer")
    .attr("width", 30)
    .attr("height", 30)
    .attr("x", width_gt + 30)
    .attr("y", 30)
    .attr("rx", 5) //rx and ry give the buttons rounded corners
    .attr("ry", 5)
    .attr("fill", "black")
    .on("mousedown", shuffleGt)
    .on("mouseup", shuffleStopGt)
  svg_gt.append("rect")
    .attr("class", "button")
    .style("cursor", "pointer")
    .attr("width", 30)
    .attr("height", 30)
    .attr("x", width_gt + 70)
    .attr("y", 30)
    .attr("rx", 5) //rx and ry give the buttons rounded corners
    .attr("ry", 5)
    .attr("fill", "#A001B9")
    .on("mousedown", shuffleStopGt_b)

  svg_gt.append("rect")
    .attr("class", "button")
    .style("cursor", "pointer")
    .attr("width", 30)
    .attr("height", 30)
    .attr("x", width_gt + width_gt / 2 + 15)
    .attr("y", 30)
    .attr("rx", 5) //rx and ry give the buttons rounded corners
    .attr("ry", 5)
    .attr("fill", "turquoise")
    .on("mousedown", softSelectedChange)

  function softSelectedChange() {
    if (softSelected) { softSelected = false }
    else { softSelected = true }
  }



  let maxMcff = data.graph_transition.maxMcff
  let minMcff = data.graph_transition.minMcff
  let maxSO = data.graph_transition.maxSO
  let minSO = data.graph_transition.minSO

  let rampEnergyMCff = d3.scaleLinear().domain([minMcff, maxMcff]).range([height_gt - height_gt / 10, height_gt / 10]);
  let rampEnergySO = d3.scaleLinear().domain([minSO, maxSO]).range([height_gt - height_gt / 10, height_gt / 10]);



  let nodes_gt = data.graph_transition.nodes.slice()
  let nb_mcff_gt = nodes_gt.filter(function (d) { return d.p_int == 1 }).length
  for (let i in nodes_gt) {
    if (jsonData.sc_so) {
      if (nodes_gt[i].p_int == 1) {
        nodes_gt[i].scoreCoh = jsonData.sc_mcff[i]
      }
      else {
        nodes_gt[i].scoreCoh = jsonData.sc_so[Number(i) - nb_mcff_gt]
      }
    }
    else {
      nodes_gt[i].p_int = nodes_gt[i].predictor

      nodes_gt[i].scoreCoh = 1
    }
  }


  console.log("link", data.graph_transition.links)

  let links_gt = data.graph_transition.links.slice()

  var mcff_so = function (e) {

    if (e.pred == "so_mcff") {
      return false;
    }
    return true

  }


  links_gt = links_gt.filter(mcff_so)

  force_gt = d3.forceSimulation()
    .force("link", d3.forceLink().id((d, i) => {
      return ""+i;
    })
      .distance(50))
    .force("charge", d3.forceManyBody().strength(-200))
    .force("center", d3.forceCenter(width_gt + width_gt / 2, height_gt / 2))



  let link_gt_l = svg_gt.append('g')
    .attr('class', 'links_gt_g')
    .selectAll('links_gt')
    .data(links_gt)
    .enter()
    .append("line")
    .attr('class', 'links_gt')
    .attr("stroke", "black");



  let node_gt_c = svg_gt.append('g')
    .attr('class', 'nodes_gt_g')
    .selectAll('circle')
    .data(nodes_gt)
    .enter()
    .append("circle")
    .attr("id", function (d:any) { return "gt_" + d.name })
    .attr("class", "nodes_gt")
    .attr("r", circleRadius_gt)
    .attr("cx", width_gt + width_gt / 2)
    .attr("cy", function (d:any, i) { return rampEnergySO(d.energy) })
    .attr('fill', function (d:any) { return so_gt_scale(d.scoreCoh) })
    .attr('opacity', 0.9)
    .style("stroke-width", 5)
    .style("stroke", "black")
    .on("mousedown", click_gt)
    .call(d3.drag()
      .on("start", dragstarted_gt)
      .on("drag", dragged_gt)
      .on("end", dragended_gt));


  node_gt_c.filter(function (d:any) { return d.p_int == 1 })
    .attr('fill', function (d:any) { return mcff_gt_scale(d.scoreCoh) })

  node_gt_c.filter(function (d:any) { return d.p_int != 1 }).append("title")
    .text(function (d:any) { return d.scoreCoh })//d.name +"_"+

  node_gt_c.filter(function (d:any) { return d.p_int == 1 }).append("title")
    .text(function (d:any) { return d.scoreCoh })



  force_gt
    .nodes(nodes_gt)
    .on("tick", ticked_gt);

  force_gt
    .force("link")
    .links(links_gt);
  //force_gt.restart()

  var secStructSelected = svg_gt.select("#gt_" + secStructSelected_int).style("stroke-width", 8)


  function click_gt(d) {
    console.log("click_gt")
    console.log(d)
    secStructSelected.style("stroke-width", 5)

    secStructSelected_int = Number(d.name)
    secStructSelected = svg_gt.select("#gt_" + d.name)

    secStructSelected.style("stroke-width", 8)

    updateSS(-1)
  }

  function updateSS(n) {
    if (n != -1) {
      secStructSelected.style("stroke-width", 5)

      secStructSelected = svg_gt.select("#gt_" + n)

      secStructSelected.style("stroke-width", 8)

    }
    nodes_ss_c.attr('stroke', function (d:any, i) { return getStrokeColor(secStructSelected_int, d.prediction_color_mcff, d.prediction_color_so) })
    nodes_ss_c.attr('stroke-width', function (d:any, i) { return reactivityScaleWs(secStructSelected_int, d.sc_pred_so, d.sc_pred_mcff) })

    nodes_ss_c.selectAll("title").remove()
    textLabels_ss.selectAll("title").remove()

    if (secStructSelected_int < nt_mcff) {
      nodes_ss_c.append("title")
        .text(nodeSS_Text);

      textLabels_ss.append("title")
        .text(nodeSS_Text);
    }
    else {
      nodes_ss_c.append("title")
        .text(nodeSS_Text);

      textLabels_ss.append("title")
        .text(nodeSS_Text);



    }
    if (secStructSelected_int < nt_mcff) {
      links_ss = data.d3ForceLayout2p.mcff[secStructSelected_int].slice();
    }
    else {
      links_ss = data.d3ForceLayout2p.rnaSubOpt[secStructSelected_int - nt_mcff].slice();
    }
    /*
    force_ss
      .force("link")
      .links(links_ss);
    */
    links_ss_l.remove()
    links_ss_l = svg_gt.insert('g', ":first-child")
      .attr('class', 'links_ss_g')
      .selectAll('links_ss')
      .data(links_ss)
      .enter()
      .append("line")
      .attr('class', 'links_gt')
      .attr("stroke", "black");

    links_ss_l.filter(function (d:any) { return d.value == 2 })
      .attr("x1", function (d:any) {
        var xPos = d.source.x;
        if (xPos < 0) return 0;
        if (xPos > (width_ss - circleRadius_ss)) return (width_ss - circleRadius_ss);
        return xPos;
      })
      .attr("y1", function (d:any) {
        var yPos = d.source.y;
        if (yPos < 0) return 0;
        if (yPos > (height_ss - circleRadius_ss)) return (height_ss - circleRadius_ss);
        return yPos;
      })
      .attr("x2", function (d:any) {
        var xPos = d.target.x;
        if (xPos < 0) return 0;
        if (xPos > (width_ss - circleRadius_ss)) return (width_ss - circleRadius_ss);
        return xPos;
      })
      .attr("y2", function (d:any) {
        var yPos = d.target.y;
        if (yPos < 0) return 0;
        if (yPos > (height_ss - circleRadius_ss)) return (height_ss - circleRadius_ss);
        return yPos;
      })
      .attr("stroke-width", 5);
    force_ss.alpha(0.01)
    force_ss.restart();
  }

  function dragstarted_gt(d) {
    force_gt.alpha(0.01)
    force_gt.restart();
    stopGt = false
    d3.select(this).raise().classed("active", true);
  }

  function dragged_gt(d) {
    d3.select(this).attr("cx", d.x = d3.event.x);
    //force_gt.restart()
  }


  function dragended_gt(d) {
    d3.select(this).classed("active", false);
    shuffleStopGt_b()
  }

  function ticked_gt() {
    if (stopGt) {
      force_gt.alpha(0)
      force_gt.stop()
      shuffleStopGt()
    }
    link_gt_l
      .attr("x1", function (d:any) {
        var xPos = d.source.x;
        if (xPos < width_gt) d.source.x = width_gt;
        if (xPos > (width_gt * 2 - circleRadius_gt - gap_gt)) d.source.x = (width_gt * 2 - circleRadius_gt - gap_gt);
        return d.source.x;
      })
      .attr("y1", function (d:any) {
        if (d.source.p_int == 1) {
          var yPos = rampEnergyMCff(d.source.energy);
        }
        else {
          var yPos = rampEnergySO(d.source.energy);
        }
        if (yPos < 0) return 0;
        if (yPos > (height_gt - circleRadius_gt)) return (height_gt - circleRadius_gt);
        return yPos;
      })
      .attr("x2", function (d:any) {
        var xPos = d.target.x;
        if (xPos < width_gt) d.target.x = width_gt;
        if (xPos > (width_gt * 2 - circleRadius_gt - gap_gt)) d.target.x = (width_gt * 2 - circleRadius_gt - gap_gt);
        return d.target.x;
      })
      .attr("y2", function (d:any) {
        if (d.source.p_int == 1) {
          var yPos = rampEnergyMCff(d.target.energy);
        }
        else {
          var yPos = rampEnergySO(d.target.energy);
        }
        if (yPos < 0) return 0;
        if (yPos > (height_gt - circleRadius_gt)) return (height_gt - circleRadius_gt);
        return yPos;
      });

    node_gt_c.filter(function (d:any) { return d.p_int == 1 })
      .attr("cx", function (d:any) {
        var xPos = d.x;
        if (xPos < width_gt) d.x = width_gt;
        if (xPos > (width_gt * 2 - circleRadius_gt - gap_gt)) d.x = (width_gt * 2 - circleRadius_gt - gap_gt);
        return d.x;
      })
      .attr("cy", function (d:any) {
        var yPos = rampEnergyMCff(d.energy);
        if (yPos < 0) return 0;
        if (yPos > (height_gt - circleRadius_gt)) return (height_gt - circleRadius_gt);
        return yPos;
      });

    node_gt_c.filter(function (d:any) { return d.p_int == 2 })
      .attr("cx", function (d:any) {
        var xPos = d.x;
        if (xPos < width_gt) d.x = width_gt;
        if (xPos > (width_gt * 2 - circleRadius_gt - gap_gt)) d.x = (width_gt * 2 - circleRadius_gt - gap_gt);
        return d.x;
      })
      .attr("cy", function (d:any) {
        var yPos = rampEnergySO(d.energy);
        if (yPos < 0) return 0;
        if (yPos > (height_gt - circleRadius_gt)) return (height_gt - circleRadius_gt);
        return yPos;
      });
  

  }

  svg_ss.append("rect")
    .attr("class", "button")
    .style("cursor", "pointer")
    .attr("width", 30)
    .attr("height", 30)
    .attr("x", 30)
    .attr("y", 65)
    .attr("rx", 5) //rx and ry give the buttons rounded corners
    .attr("ry", 5)
    .attr("fill", "red")
    .on("click", scrollGt)

  svg_ss.append("rect")
    .attr("class", "button")
    .style("cursor", "pointer")
    .attr("width", 30)
    .attr("height", 30)
    .attr("x", 30)
    .attr("y", 100)
    .attr("rx", 5) //rx and ry give the buttons rounded corners
    .attr("ry", 5)
    .attr("fill", "blue")
    .on("click", changeNodeColor)

  svg_ss.append("rect")
    .attr("class", "button")
    .style("cursor", "pointer")
    .attr("width", 30)
    .attr("height", 30)
    .attr("x", 30)
    .attr("y", 65)
    .attr("rx", 5) //rx and ry give the buttons rounded corners
    .attr("ry", 5)
    .attr("fill", "red")
    .on("click", scrollGt)

  svg_ss.append("rect")
    .attr("class", "button")
    .style("cursor", "pointer")
    .attr("width", 65)
    .attr("height", 65)
    .attr("x", 70)
    .attr("y", 65)
    .attr("rx", 5) //rx and ry give the buttons rounded corners
    .attr("ry", 5)
    .attr("fill", "green")
    .on("click", move)



  var softSelected = false

  

  shuffleGt()
  setTimeout(function () {
    shuffleStopGt()

    shuffleGt()
    setTimeout(function () { shuffleStopGt() }, 10);

  }, 10);

  setTimeout(function () { shuffle() }, 1);

  setTimeout(function () { shuffleStop() }, 3);
  setTimeout(function () { shuffleStopGt_b() }, 3);
  
}



alert("Utilisez le zoom du navigateur pour changer la vue\nz=10sec de mouvement aléatoire\nBouton noir=mouvement aléatoire\nBouton rouge=traverser le graphe des transition\nBouton bleu=changement de mode de couleur:\n  1-Selon la sorte du nt\n  2-Selon les scores de sondage\n  3-Selon l'erreur\n\nL'étiquette des nts représente : La classe (Low,Bg,Hi)|La position|Le score|L'erreur|MCN_Gauche|MCN_Droit|\nLe dernier champs est la contributionn du nt au score total (de RNASS) de la SS\n\nLe score total peut etre obtenue en passant la sourie au-dessus des cercles représentants les SS dans le graphes des transitions à droite de la SS (pour faire apparaître son étiquette)\n\nLes hauteurs des SS sont proportionnelles aux niveaux d'énergies des SS indépendament pour chaque logiciel de prédiction des SS (RNAsubopt à gauche et MCflashfold à droite)\n\nPlus un cercle est pâle meilleur est le score total (de RNASS), l'échelle des deux logiciels est indépendante là aussi")
alert("Le developpement a été fait avec google chrome,\nVous pouvez accèder à la console en préssant sur f12, et les données sont dans la variable jsonData,\nles variables des champs de forces sont dans force_ss et force_gt (d3.forceSimulation())")
alert("Vous pouvez clicker sur les nts pour intéroger la base de données des MCN, un panneau d'information est présent dans le bas de l'écran, soyez patient... Si cela prend plus de 10 secondes, reclickez. Le nombre de nucléotide à réactivité élevé, moyenne et basse est indiqué dans le premier panneau et 20 URL menant vers des nts homologues (par leur MCN) sont affichés. (10 nts de réactivité élevé au sondage chimique et 10 de réactivité basse.)")
alert("z,rouge,bleu ... ")
alert("\n\n\n\nEn cas d'emballement lors du monvement aléatoire : \n\n    respirez, dézoomez (ctrl + défilement vers le bas) et rafraîchissez le navigateur")
alert("Pour des lien vers des nucléotides difficiles à prédire : http://majsrv1.iric.ca:3000/RDV")
