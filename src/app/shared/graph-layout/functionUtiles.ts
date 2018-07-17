import { Node } from '../../objectDef/Node';
import { Link } from '../../objectDef/Link';
import * as d3 from 'd3';

 //fonction util
export function color() {
  return d3.scaleOrdinal(d3.schemeCategory10);
}

function colorScale(arg1) {

  console.log("arg1 : ", arg1)
  let result = d3.scaleLinear<string>()
    .domain([0, 1])
    .range(['red', 'blue'])
    .interpolate(d3.interpolateHcl)(arg1);

  console.log("result : ", result)

  return result
}

export function fillcolorNode(d: Node,score){
    if (d.group == 1) {
      return "gainsboro" // une couleur
    }
    else {

      return colorScale(Number(score))
    }

  }

export function fillcolorLink(d: Link) {
  if (d.value == 1) {
    return "black" 
  }
  else {

    return "red"
  }

}

export function fillcolorRect(score) {
    return colorScale(Number(score))
}
