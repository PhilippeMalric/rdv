
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
    this.majsrvService.test().subscribe(x => console.log("test : ", x))
  }

}
