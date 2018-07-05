import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RmdbExpService {
  constructor(private http: HttpClient) {

  }

  public getFiles(name): Observable<any> {
    let url = "./assets/desc/description_" + name + ".json"
    console.log("url", url)
    return this.http.get(url)
  }
}
