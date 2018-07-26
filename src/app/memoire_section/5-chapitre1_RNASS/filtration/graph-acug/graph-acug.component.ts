import { Component, OnInit, AfterViewInit, Inject, ViewContainerRef, ViewChild } from '@angular/core';
import { RmdbExpService } from 'src/app/service/rmdb-exp-service';
import * as c3 from 'c3';
import { SelectItem } from 'primeng/components/common/selectitem';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
import { MyJoinPipe } from '../../../../pipes/my-join.pipe';


@Component({
  selector: 'app-graph-acug',
  templateUrl: './graph-acug.component.html',
  styleUrls: ['./graph-acug.component.css'],
  providers: [MyJoinPipe]
})
export class GraphACUGComponent implements OnInit, AfterViewInit {
  

  myAverage(values:any[]): number {
    let sum = values.reduce((previous, current) => current += previous);
    let avg = sum / values.length;
    return avg;
  }

  /*
  @ViewChild('dynamic', {
    read: ViewContainerRef
  }) viewContainerRef: ViewContainerRef
  */
  names = [{ name: "ETERNA_R00_0000" }, { name: "ETERNA_R00_0001" }, { name: "ETERNA_R00_0002" }, { name: "ETERNA_R69_0000" }, { name: "ETERNA_R69_0001" }, { name: "ETERNA_R70_0000" }, { name: "ETERNA_R71_0000" }, { name: "ETERNA_R72_0000" }, { name: "ETERNA_R73_0000" }, { name: "ETERNA_R73_0001" }, { name: "ETERNA_R74_0000" }, { name: "ETERNA_R75_0000" }, { name: "ETERNA_R76_0000" }, { name: "ETERNA_R76_0001" }, { name: "ETERNA_R77_0000" }, { name: "ETERNA_R77_0001" }, { name: "ETERNA_R77_0002" }, { name: "ETERNA_R78_0000" }, { name: "ETERNA_R78_0001" }, { name: "ETERNA_R79_0000" }, { name: "ETERNA_R79_0001" }, { name: "ETERNA_R80_0000" }, { name: "ETERNA_R80_0001" }, { name: "ETERNA_R81_0000" }, { name: "ETERNA_R81_0001" }, { name: "ETERNA_R82_0000" }, { name: "ETERNA_R82_0001" }, { name: "ETERNA_R83_0000" }, { name: "ETERNA_R83_0002" }, { name: "ETERNA_R83_0003" }, { name: "ETERNA_R84_0000" }, { name: "ETERNA_R85_0000" }, { name: "ETERNA_R86_0000" }, { name: "ETERNA_R87_0000" }, { name: "ETERNA_R87_0001" }, { name: "ETERNA_R87_0002" }, { name: "ETERNA_R87_0003" }, { name: "ETERNA_R88_0000" }, { name: "ETERNA_R88_0001" }, { name: "ETERNA_R89_0000" }, { name: "ETERNA_R90_0000" }, { name: "ETERNA_R91_0000" }, { name: "ETERNA_R92_0000" }, { name: "ETERNA_R93_0000" }, { name: "ETERNA_R94_0000" }, { name: "ETERNA_R95_0000" }]

  currentName = "ETERNA_R00_0000";

  allSequences: String[] = []
  allStn: number[] = []
  allAvg: number[] = []
  allSeqAvgStn : any[] = []
  

  public jsonFile$: Observable<String[]>

  selectedStn: number;
  selectedReactivityAvg: number;
  selectedSeq: String;

  displayDialog: boolean;

  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;

  constructor(private rmdbExpService: RmdbExpService) { }

  ngOnInit() {
    let name = "ETERNA_R00_0000"
    this.jsonFile$ = this.getFileByName(name);
    this.jsonFile$.subscribe((data: any) => {

      let mappedSeq = $.map(data.data_annotation, function (v) { return v; })
      //console.log("mappedData", mappedData)
      this.allSequences = mappedSeq.map(x => x.sequence[0])
      this.allStn = mappedSeq.map(x => Number((x.signal_to_noise[0]).split(":")[1]))
      //console.log("data.data_reactivity : ", data.data_reactivity)
      let mappedReactivityArray = Object.values(data.data_reactivity)
      //console.log("mappedReactivityArray : ", mappedReactivityArray)
      
      let mappedReactivityArray_num = mappedReactivityArray.map((x: any[]) => {
          //console.log(x);
          return x.map(y => Number(y))
      });
      //console.log("mappedReactivityArray_num : ", mappedReactivityArray_num)
      
      this.allAvg = mappedReactivityArray_num.map((x :number[]) => this.myAverage(x))

      //console.log("this.allAvg", this.allAvg);

      //console.log("this.allSequences :", this.allSequences);

      this.allSeqAvgStn = this.allSequences.map((seq, i) => {
        return { seq: seq, reactivityAvg: this.allAvg[i], stn: this.allStn[i] };
      });

      //console.log(" this.allSeqEtAvg : ",this.allSeqEtAvg)
    
    });

   

    this.sortOptions = [
      { label: 'Newest First', value: '!year' },
      { label: 'Oldest First', value: 'year' },
      { label: 'Brand', value: 'brand' }
    ];
   
  }


  ngAfterViewInit(): void {
    
  }

  getFileByName(name): Observable<any>{
    return this.rmdbExpService.getFile(name)
  }


  selectSeqAvgStn(event: Event, seq: String, reactivityAvg: number, stn: number) {

    this.selectedStn = stn;
    this.selectedSeq = seq;
    this.selectedReactivityAvg = reactivityAvg
    //console.log("this.selectedSeq : ", this.selectedSeq)
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


  onExpChange(event) {
    //console.log("event", event)
    this.currentName = event.value.name;
    this.jsonFile$ = this.getFileByName(this.currentName);
    this.jsonFile$.subscribe((data:any) => {

      let mappedData = $.map(data.data_annotation, function (v) { return v; })
      //console.log("mappedData", mappedData)
      this.allSequences = mappedData.map(x => x.sequence[0])

    });
    
  }

  onDialogHide() {
    this.selectedSeq = null;
  }

 

}




