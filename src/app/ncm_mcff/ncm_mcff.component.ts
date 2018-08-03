import { Component, OnInit } from '@angular/core';
import { MajsrvService } from "../service/majsrv.service"
//import { NCMService } from '../service/ncm.service';
import { SelectItem } from 'primeng/components/common/selectitem';
import { Ncm } from '../objectDef/Ncm';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-ncm-mcff',
  templateUrl: './ncm_mcff.component.html',
  styleUrls: ['./ncm_mcff.component.css']
})
export class NCM_mcffComponent implements OnInit {

  ncms: Ncm[] = [];
  ncms$: Observable<Ncm[]>

  skip = 0;
  limit = 1000;
  cmin = 20;
  stdDevMax = 10

  ncm1_Only_seq = ""
  ncm2_Only_seq = ""

  ncm_graph = {}

  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;

  selectedNcm: Ncm;

  displayDialog: boolean;

  filterD: any

  collection: string = "RNA_Hi_stn_MFE_Filter__90__Pred_db_rdv_col_0_5_0_5_0_5_stat__A_0_5_S_1_0_stn_6_0_ed_20_0"

  

  constructor(private ncmService: MajsrvService) { }


  ngOnInit() {


    //this.ncmService.getNCM(this.skip, this.limit, this.cmin, this.stdDevMax).then((ncms: Ncm[]) => { this.ncms = ncms });
    this.ncms$ = this.ncmService.createNCMObservableFiltered_mcff(this.collection, this.skip, this.limit, this.cmin, this.stdDevMax);


    this.sortOptions = [
      { label: 'Nombre (ordre croissant)', value: 'count' },
      { label: 'Nombre (ordre décroissant)', value: '!count' },
      { label: 'Écart Type croissant', value: 'stdDev' },
      { label: 'Écart Type décroissant', value: '!stdDev' },
      { label: 'Score Moyen croissant', value: 'scoreMoy' },
      { label: 'Score Moyen décroissant', value: '!scoreMoy' }
    ];
  }

  click() {

    this.ncms$ = this.ncmService.createNCMObservableFiltered_so(this.collection.trim(), this.skip, this.limit, this.cmin, this.stdDevMax);

  }




  /*
  loadData(event) {
    //event.first = First row offset
    //event.rows = Number of rows per page
    this.ncmService.getNCM(this.skip, this.limit, this.cmin, this.stdDevMax).then((ncms: Ncm[]) => { this.ncms.push.apply(this.ncms, ncms); this.skip += this.limit; });

  }
  */

  selectNcm(event: Event, ncm: Ncm) {
    this.selectedNcm = ncm;
    this.displayDialog = true;
    event.preventDefault();
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


}

