import * as d3 from 'd3';
import { Component, OnInit } from '@angular/core';
import { MajsrvService } from "../service/majsrv.service"
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})


export class TestComponent implements OnInit {

  ngOnInit(): void {
  }

  //collection1 = "MCN_from_ETERNA_R95_0000_noPred_col_collectionName_stat_A_0_5_S_1_5_stn_1_5_stat"
  //collection2 = "ETERNA_R95_0000_Pred_db_dbName_col_collectionName_stat_A_0_5_S_1_5_stn_5_stat"
  collection4 = "test1_noPred__A_0_5_S_5_stn_1_5_stat"
  collection5 = "real_noPred__A_0_5_S_5_stn_1_5_stat"
  collection6 = "test_Majsrv1_noPred__A_0_5_S_5_stn_1_5_stat"
  collection7 = "test_qsub_ETERNA_R9_noPred__A_0_5_S_1_0_stn_1_5_ed_0_5_stat"
  collection8 = "qsub_ETERNA_R_noPred__A_0_5_S_1_0_stn_1_5_ed_0_5_stat"
  }

