import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Ncm } from '../objectDef/Ncm';
//import { Http, Response } from 'angular2/http';

@Injectable({
  providedIn: 'root'
})
export class NCMService {

  constructor(private http: HttpClient) { }

  getNCM(skip: Number, limit: Number, cmin: Number, stdDevMax: Number) {

    let configUrl = `https://mlabapi.herokuapp.com/ncm_grouped_Low_std_dev/skip=${skip}/limit=${limit}/countMin=${cmin}/stdDevMax=${stdDevMax}`
    return this.http.get(configUrl)
      .toPromise()
      .then(data => { return data; });
  }

  createNCMObservable(skip: Number, limit: Number, cmin: Number, stdDevMax: Number): Observable<Ncm[]> {

    let configUrl = `https://mlabapi.herokuapp.com/ncm_grouped_Low_std_dev/skip=${skip}/limit=${limit}/countMin=${cmin}/stdDevMax=${stdDevMax}`

    return Observable.create(observer => {
      fetch(configUrl).then(response => {

        return response.json();

      }).then(body => {
         
        observer.next(body)
        observer.complete()
      
      })

    })

     
  }

 

}
