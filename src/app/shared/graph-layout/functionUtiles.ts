import { Node } from '../../objectDef/Node';
import { Link } from '../../objectDef/Link';
import * as d3 from 'd3';

 //fonction util
export function color() {
  return d3.scaleOrdinal(d3.schemeCategory10);
}

function colorScale(arg1) {
  return d3.scaleLinear<string>()
    .domain([0, 1])
    .range(['red', 'blue'])
    .interpolate(d3.interpolateHcl)(arg1);
}

export function fillcolorNode(d: Node){
    if (d.group == 1) {
      return "gainsboro"
    }
    else {

      return colorScale(Number(this.score))
    }

  }

export function fillcolorRect(score) {
    return colorScale(Number(score))
}
