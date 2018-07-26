import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Ncm } from '../objectDef/Ncm';
import { map } from "rxjs/operators";

//import { Http, Response } from 'angular2/http';

@Injectable({
  providedIn: 'root'
})
export class NCMService {

  filterD: any = null


  constructor(private http: HttpClient) {

    this.filterD = {}
    this.filterD["-&-"] = 1;
    this.filterD["noVG_notPaired&-"] = 1;
    this.filterD["Premier_notPaired&-"] = 1;

  }

  getNCM(skip: Number, limit: Number, cmin: Number, stdDevMax: Number) {

    let configUrl = `https://mlabapi.herokuapp.com/ncm_grouped_Low_std_dev/skip=${skip}/limit=${limit}/countMin=${cmin}/stdDevMax=${stdDevMax}`
    return this.http.get(configUrl)
      .toPromise()
      .then(data => { return data; });
  }

  createNCMObservable(skip: Number, limit: Number, cmin: Number, stdDevMax: Number): Observable<Ncm[]> {

    let ncmUrl = `https://mlabapi.herokuapp.com/ncm_grouped_Low_std_dev/skip=${skip}/limit=${limit}/countMin=${cmin}/stdDevMax=${stdDevMax}`
    console.log("ncmUrl : ",ncmUrl)
    return Observable.create(observer => {
      fetch(ncmUrl).then(response => {

        return response.json();

      }).then(body => {

        observer.next(body)
        observer.complete()

      })

    })
  }

  createNCMObservableFiltered(skip: Number, limit: Number, cmin: Number, stdDevMax: Number): Observable<Ncm[]> {

    return this.createNCMObservable(skip, limit, cmin, stdDevMax)
      .pipe(map(epics => epics.filter((ncm: any) => !(ncm._id in this.filterD))));

  }






}
