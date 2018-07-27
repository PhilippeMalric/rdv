import * as d3 from 'd3';
import { Component, OnInit } from '@angular/core';
import { MajsrvService } from "../service/majsrv.service"
import { Observable } from 'rxjs/internal/Observable';
import { environment } from "../../environments/environment"

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})


export class TestComponent implements OnInit {

  devMode = !environment.production

  ngOnInit(): void {
  }

 
  prodExempleCollection = "small2_Filter_ETERNA_R87_0001_noPred__A_0_5_S_1_5_stn_1_0_ed_20_0_stat"
  
  }

