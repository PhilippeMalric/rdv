import { Component, OnInit } from '@angular/core';
import { NCMService } from '../service/ncm.service';
import { SelectItem } from 'primeng/components/common/selectitem';
import { Ncm } from '../objectDef/Ncm';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-ncm2',
  templateUrl: './ncm2.component.html',
  styleUrls: ['./ncm2.component.css']
})
export class NCMComponent implements OnInit {

  ncms: Ncm[] = [];
  ncms$: Observable<Ncm[]>

  skip = 0;
  limit = 100;
  cmin = 2;
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

  constructor(private ncmService: NCMService) { }


  ngOnInit() {
    //this.ncmService.getNCM(this.skip, this.limit, this.cmin, this.stdDevMax).then((ncms: Ncm[]) => { this.ncms = ncms });
    this.ncms$ = this.ncmService.createNCMObservable(this.skip, this.limit, this.cmin, this.stdDevMax)
    this.sortOptions = [
      { label: 'Nombre (ordre croissant)', value: 'count' },
      { label: 'Nombre (ordre décroissant)', value: '!count' },
      { label: 'Écart Type croissant', value: 'stdDev' },
      { label: 'Écart Type décroissant', value: '!stdDev' },
      { label: 'Score Moyen croissant', value: 'scoreMoy' },
      { label: 'Score Moyen décroissant', value: '!scoreMoy' }
    ];
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

  processNcm(event: Event, ncm: Ncm) {
    console.log("process");
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

