import { Component, OnInit } from '@angular/core';
import { RmdbExpService } from 'src/app/service/rmdb-exp-service';

@Component({
  selector: 'app-rmdb-exp-name',
  templateUrl: './rmdb-exp-name.component.html',
  styleUrls: ['./rmdb-exp-name.component.css']
})
export class RMDBExpNameComponent implements OnInit {

  labNames = this.labNames = [{ name: "ETERNA_R00_0000" }, { name: "ETERNA_R00_0001" }, { name: "ETERNA_R00_0002" }, { name: "ETERNA_R69_0000" }, { name: "ETERNA_R69_0001" }, { name: "ETERNA_R70_0000" }, { name: "ETERNA_R71_0000" }, { name: "ETERNA_R72_0000" }, { name: "ETERNA_R73_0000" }, { name: "ETERNA_R73_0001" }, { name: "ETERNA_R74_0000" }, { name: "ETERNA_R75_0000" }, { name: "ETERNA_R76_0000" }, { name: "ETERNA_R76_0001" }, { name: "ETERNA_R77_0000" }, { name: "ETERNA_R77_0001" }, { name: "ETERNA_R77_0002" }, { name: "ETERNA_R78_0000" }, { name: "ETERNA_R78_0001" }, { name: "ETERNA_R79_0000" }, { name: "ETERNA_R79_0001" }, { name: "ETERNA_R80_0000" }, { name: "ETERNA_R80_0001" }, { name: "ETERNA_R81_0000" }, { name: "ETERNA_R81_0001" }, { name: "ETERNA_R82_0000" }, { name: "ETERNA_R82_0001" }, { name: "ETERNA_R83_0000" }, { name: "ETERNA_R83_0002" }, { name: "ETERNA_R83_0003" }, { name: "ETERNA_R84_0000" }, { name: "ETERNA_R85_0000" }, { name: "ETERNA_R86_0000" }, { name: "ETERNA_R87_0000" }, { name: "ETERNA_R87_0001" }, { name: "ETERNA_R87_0002" }, { name: "ETERNA_R87_0003" }, { name: "ETERNA_R88_0000" }, { name: "ETERNA_R88_0001" }, { name: "ETERNA_R89_0000" }, { name: "ETERNA_R90_0000" }, { name: "ETERNA_R91_0000" }, { name: "ETERNA_R92_0000" }, { name: "ETERNA_R93_0000" }, { name: "ETERNA_R94_0000" }, { name: "ETERNA_R95_0000" }]

  array = null;
  selectedLab = this.labNames[0]
  display = false;
  distinctUniqueValuesInArray = (arr, prop) => arr.map(obj => obj[prop]).filter((v, i, a) => a.indexOf(v) == i)
  createDataTable = function (name) {

    this.rmdbExpService.getFile(name).subscribe(data => {
      console.log(data)
      let authors = data.authors;
      let comments = data.comments;
      let construct_count = data.construct_count;
      let creation_date = data.creation_date;
      let data_count = data.data_count;
      let description = data.description;
      let name = data.name;
      let rmdb_id = data.rmdb_id;
      let modifier = ""
      if (data.annotation.modifier) {
        modifier = data.annotation.modifier[0]
      }
      else {
        let array = Object.values(data.data_annotation).map((x: any) => { return x.modifier[0] })
        console.log("array : ", array)
        modifier = Array.from(new Set(array)).join(",")
      }

      let chemical = ""
      if (data.annotation.chemical) {
        chemical = data.annotation.chemical.join(",")
      }
      else {
        chemical = "none"
      }

      let d = { authors: authors, comments: comments, construct_count: construct_count, creation_date: creation_date, modifier: modifier, chemical: chemical, data_count: data_count, description: description, name: name, rmdb_id: rmdb_id }
      this.array = Object.entries(d).map(([key, value]) => ({ key, value }));


    })
  }

  constructor(private rmdbExpService: RmdbExpService) {
    let name = "ETERNA_R00_0000"
    this.createDataTable(name)

}

  ngOnInit() {
  }
 
  buttonClick(event) {
    console.log("event",event)
    this.createDataTable(event.value.name)
  }



  showDetails() {

    this.display = true

  }


}
