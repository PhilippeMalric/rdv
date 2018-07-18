import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Ncm } from '../objectDef/Ncm';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MajsrvService {

  filterD: any = null


  constructor(private http: HttpClient) {

    this.filterD = {}
    this.filterD["-&-"] = 1;
    this.filterD["noVG_notPaired&-"] = 1;
    this.filterD["Premier_notPaired&-"] = 1;

  }

  test(): Observable<any> {

    let url = "http://majsrv1.iric.ca:3000/test";
    console.log("url : ", url)
    return Observable.create(observer => {
      fetch(url).then(response => {
        let test = response;
        console.log("test11 : ", test)
        return test;

      }).then(body => {

        observer.next(body)
        observer.complete()

      })

    })
  }

  createNCMObservable(skip: Number, limit: Number, cmin: Number, stdDevMax: Number): Observable<Ncm[]> {

    let ncmUrl = `http://majsrv1.iric.ca:3000/ncm_grouped_Low_std_dev/skip=${skip}/limit=${limit}/countMin=${cmin}/stdDevMax=${stdDevMax}`
    console.log("ncmUrl : ", ncmUrl)
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


  sortNcm = (a,b) => {
    ((a - b) < 0 )?1:-1
    }

  createNCM_stat_Observable(collection, soft): Observable<any[]> {

    let ncmUrl = `http://majsrv1.iric.ca:3000/ncm_stat/collection=${collection}/soft=${soft}`
    console.log("ncmUrl : ", ncmUrl)
    return this.http.get<Ncm[]>(ncmUrl)

}




}

