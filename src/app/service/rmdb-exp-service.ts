import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RmdbExpService {

  files = ["ETERNA_R00_0000", "ETERNA_R00_0001", "ETERNA_R00_0002", "ETERNA_R69_0000", "ETERNA_R69_0001", "ETERNA_R70_0000", "ETERNA_R71_0000", "ETERNA_R72_0000", "ETERNA_R73_0000", "ETERNA_R73_0001", "ETERNA_R74_0000", "ETERNA_R75_0000", "ETERNA_R76_0000", "ETERNA_R76_0001", "ETERNA_R77_0000", "ETERNA_R77_0001", "ETERNA_R77_0002", "ETERNA_R78_0000", "ETERNA_R78_0001", "ETERNA_R79_0000", "ETERNA_R79_0001", "ETERNA_R80_0000", "ETERNA_R80_0001", "ETERNA_R81_0000", "ETERNA_R81_0001", "ETERNA_R82_0000", "ETERNA_R82_0001", "ETERNA_R83_0000", "ETERNA_R83_0002", "ETERNA_R83_0003", "ETERNA_R84_0000", "ETERNA_R85_0000", "ETERNA_R86_0000", "ETERNA_R87_0000", "ETERNA_R87_0001", "ETERNA_R87_0002", "ETERNA_R87_0003", "ETERNA_R88_0000", "ETERNA_R88_0001", "ETERNA_R89_0000", "ETERNA_R90_0000", "ETERNA_R91_0000", "ETERNA_R92_0000", "ETERNA_R93_0000", "ETERNA_R94_0000", "ETERNA_R95_0000"];


  constructor(private http: HttpClient) {

  }

  public getFile(name): Observable<any> {
    let url = "./assets/desc/description_" + name + ".json"
    console.log("url", url)
    return this.http.get(url)
  }


}
