import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Observer} from 'rxjs/Observer';
import {Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  numbersObsSubscription:Subscription;
  customObsSubscription:Subscription;
  constructor() { }

  ngOnInit() {
    const myNumbers:Observable<number> = Observable.interval(1000)
      .map((data:number)=>{
        return data * 2;
      });
      this.numbersObsSubscription = myNumbers.subscribe((number:number)=>{
        console.log(number);
      });
      const myObservale:Observable<any> = Observable.create((observer:Observer<string>)=>{
        setTimeout(()=>{
          observer.next('一个');
        },2000)
        setTimeout(()=>{
          observer.next('第二个');
        },4000);
        setTimeout(()=>{
          observer.error('错误');
          // observer.complete();
        },5000);
        setTimeout(()=>{
          observer.next('第三个');
        },6000);
      });
      this.customObsSubscription = myObservale.subscribe(
        (data:string)=>{console.log(data)},
        (err:string)=>{console.log(err)},
        ()=>{console.log('完成')}
      );
  }
  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.numbersObsSubscription.unsubscribe();
    this.customObsSubscription.unsubscribe();
  }

}
