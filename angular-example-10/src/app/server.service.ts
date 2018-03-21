import { Injectable } from '@angular/core';
import {Http,Headers,Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class ServerService {

  constructor(private http:Http) {
  }
   storeServers(server: any[]){
      const headers:Headers = new Headers({'Content-Type':'application/json'});
      // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
      //   server,
      //   {headers:headers}
      // );
      return this.http.put('https://udemy-ng-http.firebaseio.com/data.json',
        server,
        {headers:headers}
      );
   }
   getServers(){
     return this.http.get('https://udemy-ng-http.firebaseio.com/data')
      .map((response:Response)=>{
        const data = response.json();
        for(const server of data){
          server.name = 'FETCH_'+server.name;
        }
        return data;
      }).catch((err:Response)=>{
        return Observable.throw('获取失败');
      });
   }
   getAppName(){
     return this.http.get('https://udemy-ng-http.firebaseio.com/appName.json')
      .map((response:Response)=>{
        return response.json();
      }).catch((error:Response)=>{
        return Observable.throw('获取失败');
      });
   }
}
