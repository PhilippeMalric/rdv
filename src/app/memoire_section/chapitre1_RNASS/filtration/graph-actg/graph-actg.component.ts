import { Component, OnInit, AfterViewInit, Inject, ViewContainerRef, ViewChild } from '@angular/core';
import { RmdbExpService } from 'src/app/service/rmdb-exp-service';
import * as c3 from 'c3';
import { SelectItem } from 'primeng/components/common/selectitem';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
import { MyJoinPipe } from '../../../../pipes/my-join.pipe';
import { DomService } from 'src/app/memoire_section/chapitre1_RNASS/filtration/graph-actg/histo-actg/service/service-histo-actg.service';
import { HistoACTGComponent } from 'src/app/memoire_section/chapitre1_RNASS/filtration/graph-actg/histo-actg/histo-actg.component';


@Component({
  selector: 'app-graph-actg',
  templateUrl: './graph-actg.component.html',
  styleUrls: ['./graph-actg.component.css'],
  providers: [MyJoinPipe]
})
export class GraphACTGComponent implements OnInit, AfterViewInit {


  @ViewChild('dynamic', {
    read: ViewContainerRef
  }) viewContainerRef: ViewContainerRef

  names = [{ name: "ETERNA_R00_0000" }, { name: "ETERNA_R00_0001" }, { name: "ETERNA_R00_0002" }, { name: "ETERNA_R69_0000" }, { name: "ETERNA_R69_0001" }, { name: "ETERNA_R70_0000" }, { name: "ETERNA_R71_0000" }, { name: "ETERNA_R72_0000" }, { name: "ETERNA_R73_0000" }, { name: "ETERNA_R73_0001" }, { name: "ETERNA_R74_0000" }, { name: "ETERNA_R75_0000" }, { name: "ETERNA_R76_0000" }, { name: "ETERNA_R76_0001" }, { name: "ETERNA_R77_0000" }, { name: "ETERNA_R77_0001" }, { name: "ETERNA_R77_0002" }, { name: "ETERNA_R78_0000" }, { name: "ETERNA_R78_0001" }, { name: "ETERNA_R79_0000" }, { name: "ETERNA_R79_0001" }, { name: "ETERNA_R80_0000" }, { name: "ETERNA_R80_0001" }, { name: "ETERNA_R81_0000" }, { name: "ETERNA_R81_0001" }, { name: "ETERNA_R82_0000" }, { name: "ETERNA_R82_0001" }, { name: "ETERNA_R83_0000" }, { name: "ETERNA_R83_0002" }, { name: "ETERNA_R83_0003" }, { name: "ETERNA_R84_0000" }, { name: "ETERNA_R85_0000" }, { name: "ETERNA_R86_0000" }, { name: "ETERNA_R87_0000" }, { name: "ETERNA_R87_0001" }, { name: "ETERNA_R87_0002" }, { name: "ETERNA_R87_0003" }, { name: "ETERNA_R88_0000" }, { name: "ETERNA_R88_0001" }, { name: "ETERNA_R89_0000" }, { name: "ETERNA_R90_0000" }, { name: "ETERNA_R91_0000" }, { name: "ETERNA_R92_0000" }, { name: "ETERNA_R93_0000" }, { name: "ETERNA_R94_0000" }, { name: "ETERNA_R95_0000" }]

  currentName = "ETERNA_R00_0000";

  allSequences:String[] = []

  public allSequences$: Observable<String[]>

  selectedSeq: String;

  displayDialog: boolean;

  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;

  constructor(private rmdbExpService: RmdbExpService, private domService: DomService) { }

  ngOnInit() {
    let name = "ETERNA_R00_0000"
    this.getSeqByName(name).subscribe(data => {

      let mappedData = $.map(data.data_annotation, function (v) { return v; })
      console.log("mappedData", mappedData)
      this.allSequences = mappedData.map(x => x.sequence[0])

    });

    this.allSequences$ = this.getSeqByName(this.currentName);

    this.sortOptions = [
      { label: 'Newest First', value: '!year' },
      { label: 'Oldest First', value: 'year' },
      { label: 'Brand', value: 'brand' }
    ];
   
  }


  ngAfterViewInit(): void {
    
  }

  getSeqByName(name): Observable<any>{
    return this.rmdbExpService.getFile(name)
  }


  selectSeq(event: Event, seq: String) {
    this.selectedSeq = seq;
    console.log("this.selectedSeq : ", this.selectedSeq)
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
    console.log("event", event)
    this.currentName = event.value.name;
    this.getSeqByName(this.currentName).subscribe(data => {

      let mappedData = $.map(data.data_annotation, function (v) { return v; })
      console.log("mappedData", mappedData)
      this.allSequences = mappedData.map(x => x.sequence[0])

    });
    this.allSequences$ = this.getSeqByName(this.currentName);
  }


  onDialogHide() {
    this.selectedSeq = null;
  }

 

}




