import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Ncm } from '../objectDef/Ncm';
import { map } from "rxjs/operators";
import { environment } from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class MajsrvService {

  filterD: any = null
  devMode = !environment.production

  constructor(private http: HttpClient) {

    this.filterD = {}
    this.filterD["-"] = 1;
    this.filterD["noVG_notPaired"] = 1;
    this.filterD["Premier_Paired"] = 1;
    this.filterD["Premier_notPaired"] = 1;
    this.filterD["noVG_Paired"] = 1;
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

  createNCMObservable_so(collection:string,skip: Number, limit: Number, cmin: Number, stdDevMax: Number): Observable<Ncm[]> {

    if (this.devMode) {
      let ncmUrl = `http://majsrv1.iric.ca:3000/ncm_grouped_Low_std_dev_so/collection=${collection}/skip=${skip}/limit=${limit}/countMin=${cmin}/stdDevMax=${stdDevMax}`
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
    else {
      cmin = 0
      let ncmUrl = `https://mlabapi.herokuapp.com/ncm_grouped_Low_std_dev_so/skip=${skip}/limit=${limit}/countMin=${cmin}/stdDevMax=${stdDevMax}`
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


  }

  createNCMObservableFiltered_so(collection:string, skip: Number, limit: Number, cmin: Number, stdDevMax: Number): Observable<Ncm[]> {

    return this.createNCMObservable_so(collection,skip, limit, cmin, stdDevMax)
      /*
      .pipe(map(epics => epics.filter((ncm: any) => {

        if (ncm._id) {
          return ncm._id.indexOf("&") == -1 && ncm._id.indexOf("3_2") != -1
        }
        else {
          console.log("ncm._id : " + ncm._id)
          return false
        }

      })));
    */
      .pipe(map(epics => epics.filter((ncm: any) => {
        if (ncm._id.indexOf("&") != -1) {
          let splited = ncm._id.split("&");
          return !(splited[0] in this.filterD || (splited[1] in this.filterD))
        }
        else {
          return !(ncm._id in this.filterD);
        }
      })))
      
      //.pipe(map(epics => epics.filter((ncm: any) => (ncm._id.indexOf("3_2") != -1))));

  }

  //------- Mcff

  createNCMObservable_mcff(collection:string, skip: Number, limit: Number, cmin: Number, stdDevMax: Number): Observable<Ncm[]> {

    if (this.devMode) {
      let ncmUrl = `http://majsrv1.iric.ca:3000/ncm_grouped_Low_std_dev_mcff/collection=${collection}/skip=${skip}/limit=${limit}/countMin=${cmin}/stdDevMax=${stdDevMax}`
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
    else {
      cmin = 0
      let ncmUrl = `https://mlabapi.herokuapp.com/ncm_grouped_Low_std_dev_mcff/skip=${skip}/limit=${limit}/countMin=${cmin}/stdDevMax=${stdDevMax}`
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


  }

  createNCMObservableFiltered_mcff(collection:string, skip: Number, limit: Number, cmin: Number, stdDevMax: Number): Observable<Ncm[]> {

    return this.createNCMObservable_mcff(collection, skip, limit, cmin, stdDevMax)
      /*
      .pipe(map(epics => epics.filter((ncm: any) => {
       
        if (ncm._id) {
          return ((ncm._id.indexOf("&") == -1) && (ncm._id.indexOf("3_2") != -1))
        }
        else {
          console.log("ncm._id : " + ncm._id)
          return false
        }

      })));
    */
      .pipe(map(epics => epics.filter((ncm: any) => {
        console.log("ncm._id : " + ncm._id)
        if (ncm._id.indexOf("&") != -1) {
          let splited = ncm._id.split("&");
          return !(splited[0] in this.filterD || (splited[1] in this.filterD))
        }
        else {
          return !(ncm._id in this.filterD);
        }
    })))
    
      //.pipe(map(epics => epics.filter((ncm: any) => (ncm._id.indexOf("3_2") != -1 ))));
  }

  //Hi_stn_MFE_Filter__0_a_90__noPred__A_0_5_S_20_0_stn_0_5_ed_1_0




  sortNcm = (a,b) => {
    ((a - b) < 0 )?1:-1
    }

  createNCM_stat_Observable(collection, soft, min): Observable<any[]> {

    if (this.devMode){
      let ncmUrl = `http://majsrv1.iric.ca:3000/ncm_stat/collection=${collection}/soft=${soft}/minimum=${min}`
      console.log("ncmUrl : ", ncmUrl)
      return this.http.get<Ncm[]>(ncmUrl)
    }
    else {
      
      let ncmUrl = `https://mlabapi.herokuapp.com/ncm_stat/collection=${collection}/soft=${soft}/minimum=${min}`
      console.log("ncmUrl : ", ncmUrl)
      return this.http.get<Ncm[]>(ncmUrl)


    }

  }


  getRNA(collection:string,exp:string,id:string):Observable<any[]> {
    if (this.devMode) {
      let rnaUrl = `http://majsrv1.iric.ca:3000/rna/collection=${collection}/exp=${exp}/id=${id}`
      console.log("ncmUrl : ", rnaUrl)
      return this.http.get<any[]>(rnaUrl)
    }
    else {
     /* 
      let ncmUrl = `https://mlabapi.herokuapp.com/rna/collection=/exp=:exp/id=:id"`
      console.log("ncmUrl : ", ncmUrl)
      return this.http.get<Ncm[]>(ncmUrl)
      */
      let name = "1"
      let url = "./assets/rnaJson/" + name + ".json"
      console.log("url", url)
      return null
       

    }
    
  }


}

