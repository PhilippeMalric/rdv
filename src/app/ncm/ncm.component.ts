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

    if (merged.indexOf("&") != -1) {

      let stringSplited = merged.split("&")
      let ncm1 = stringSplited[0]
      let ncm2 = stringSplited[1]
      let ncm1_splitted = ncm1.split("-")
      let ncm2_splitted = ncm2.split("-")
      
      if (ncm1_splitted.length > 2 && ncm1_splitted[1].length > 1) {

        console.log("ncm1 : ", ncm1_splitted[1], ncm1_splitted[2])
        this.ncm1_Only_seq = ncm1_splitted[1] + ":"  + ncm1_splitted[2]
      }

      if (ncm2_splitted.length > 2 && ncm2_splitted[1].length > 1) {
        console.log("ncm2 : ", ncm2_splitted[1], ncm2_splitted[2])
        this.ncm2_Only_seq = ncm2_splitted[1] + ":" + ncm2_splitted[2]
      }


    }

  }

}

