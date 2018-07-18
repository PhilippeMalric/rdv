
import { Component, OnInit } from '@angular/core';
import { MajsrvService } from "../service/majsrv.service"

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})


export class TestComponent implements OnInit {

  constructor(private majsrvService: MajsrvService) { }

  ngOnInit() {

    let collection = "MCN_from_ETERNA_R95_0000_noPred_col_collectionName_stat_A_0_5_S_1_5_stn_1_5"
    let soft = "mcff"

    this.majsrvService.createNCM_stat_Observable(collection, soft).subscribe(x => console.log("test : ", x))
  }

}
