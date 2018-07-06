import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RnaJsonService {
  constructor(private http: HttpClient) {

  }

  public getRNA(name): Observable<any> {
    let url = "./assets/rnaJson/"+ name + ".json"
    console.log("url", url)
    return this.http.get(url)
  }
}
