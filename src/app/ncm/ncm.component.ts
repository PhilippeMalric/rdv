import { Component, OnInit } from '@angular/core';
import { NCMService } from '../service/ncm.service';
import { SelectItem } from 'primeng/components/common/selectitem';
import { Ncm } from '../classDef/Ncm';



@Component({
  selector: 'app-ncm',
  templateUrl: './ncm.component.html',
  styleUrls: ['./ncm.component.css']
})
export class NCMComponent implements OnInit {

  ncms: Ncm[] = [];

  skip = 0;
  limit = 10;
  cmin = 2;
  stdDevMax = 10

  ncm1_Only_seq = ""
  ncm2_Only_seq = ""

  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;

  selectedNcm: Ncm;

  displayDialog: boolean;

  constructor(private ncmService: NCMService) { }


  ngOnInit() {
    this.ncmService.getNCM(this.skip, this.limit, this.cmin, this.stdDevMax).then((ncms: Ncm[]) => { this.ncms.push.apply(this.ncms, ncms); this.skip += this.limit; });
    this.sortOptions = [
      { label: 'Nombre (ordre croissant)', value: 'count' },
      { label: 'Nombre (ordre décroissant)', value: '!count' },
      { label: 'Écart Type', value: 'stdDev' }
    ];
  }

  loadData(event) {
    //event.first = First row offset
    //event.rows = Number of rows per page
    this.ncmService.getNCM(this.skip, this.limit, this.cmin, this.stdDevMax).then((ncms: Ncm[]) => { this.ncms.push.apply(this.ncms, ncms); this.skip += this.limit; });

  }

  selectNcm(event: Event, ncm: Ncm) {
    this.selectedNcm = ncm;
    this.displayDialog = true;
    event.preventDefault();
  }

  processNcm(event: Event, ncm: Ncm) {
    this.fromMergedToGraphLayout(ncm._id)
  }


  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  onDialogHide() {
    this.selectedNcm = null;
  }

  fromMergedToGraphLayout = function (merged: String) {

    let graphLayout = {}


    if (merged.indexOf("&") != -1) {

      let stringSplited = merged.split("&")
      let ncm1 = stringSplited[0]
      let ncm2 = stringSplited[1]
      let ncm1_splitted = ncm1.split("-")
      let ncm2_splitted = ncm2.split("-")


      let ncm1_end = ""
      if (ncm1_splitted.length > 2 && ncm1_splitted[1].length > 1) {

        ncm1_end = ncm1_splitted[2].split("_")[0]

        console.log("ncm1 : ", ncm1_splitted[1], ncm1_end)
        this.ncm1_Only_seq = ncm1_splitted[1] + ":" + ncm1_end
      }

      let ncm2_end = ""
      if (ncm2_splitted.length > 2 && ncm2_splitted[1].length > 1) {

        ncm2_end = ncm1_splitted[2].split("_")[0]

        console.log("ncm2 : ", ncm2_splitted[1], ncm2_end)
        this.ncm2_Only_seq = ncm2_splitted[1] + ":" + ncm2_end


      }

      if (ncm2_splitted.length > 2 && ncm2_splitted[1].length > 1 && ncm1_splitted.length > 2 && ncm1_splitted[1].length > 1) {
        graphLayout = this.deuxNcm_tx_togL(ncm1_splitted[1], ncm1_end, ncm2_splitted[1], ncm2_end)
      }
    }

  }

    deuxNcm_tx_togL = function (s11: String, s12: String, s21: String, s22: String) {

      let nodeTab = []
      let linkTab = []
      console.log("s : ", s11, s12, s21, s22)


      nodeTab = this.createNodes2(s11, s12, s21, s22)
      linkTab = this.createLinks2(s11, s12, s21, s22)


      let d = { "nodes": nodeTab, "links": linkTab }
      return d


  }


  // --------------- fonctions utiles
  createNodes2 = function (s11: String, s12: String, s21: String, s22: String) {
    let nodes = []


    console.log("nodes creation")
    for (let c of s11.split("")) {

      nodes.push(this.nodeGen(c,1))

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
    links.push(this.linkGen(0, l_s1 - 1,1))
    links.push(this.linkGen(index2eLink1, index2eLink2,1))
    links.push(this.linkGen(l_s1 + s21.length - 2, l_s1 + s21.length - 1, 1))

    // lien phosphate

    // premier segment
    for (let i of this.range(0, index2eLink1)) {
      links.push(this.linkGen(i,i+1, 2))
    }

    // deuxieme segment (dernier si on considere les 2 NCM en tournant dans le sens des aiguilles d'une montre)
    for (let i of this.range(index2eLink2, l_s1 -1)) {
      links.push(this.linkGen(i, i + 1, 3))
    }

    // troisieme segment
    for (let i of this.range(l_s1, l_s1 + s21.length - 2)) {
      links.push(this.linkGen(i, i + 1, 4))
    }

    // quatrieme segment

    for (let i of this.range(l_s1 + s21.length, l_s1 + l_s2 - 2)) {
      links.push(this.linkGen(i, i + 1, 5))
    }

    // connecter les deux ncm
    links.push(this.linkGen(index2eLink1, l_s1 + s21.length - 2 , 6))
    links.push(this.linkGen(index2eLink2, l_s1 + l_s2 - 3 , 6))

    console.log("Links : ", links)

    return links

  }

  nodeGen = function (name,group) {

    return {"id" : name,"group": group}

  }

  linkGen = function (source,target,value ) {

    return { "source": source, "target": target, "value":value }

  }

}

