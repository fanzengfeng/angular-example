import { Component, OnInit,Input,ViewEncapsulation,OnChanges,SimpleChanges,DoCheck,AfterContentChecked,AfterViewChecked,AfterContentInit,AfterViewInit,OnDestroy,ViewChild,ElementRef,ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //显示ng 节点数据
})
// 使用插槽 以及对象的生命周期
export class ServerElementComponent implements OnInit,OnChanges,DoCheck,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit,OnDestroy {
  // 使用input修饰符获取传入的数据
  @Input('srvElement') element:{type:string,name:string,content:string};
  @Input() name:string;
  @ViewChild('heading') header:ElementRef;
  @ContentChild('contentParagraph') paragraph:ElementRef;
  constructor() {
    console.log('构造函数');
   }
   ngOnChanges(changes: SimpleChanges) {
    console.log('初始改变');
    console.log(changes);
  }
  ngOnInit() {
    console.log('初始函数');
    // 由于这段内容会在初始阶段就获取.会报错
    // console.log('头部文本内容'+this.header.nativeElement.textContent);
    // console.log('插槽文本内容'+this.paragraph.nativeElement.textContent);
  }
  ngDoCheck(){
    console.log('检查完成与否');
  }
  ngAfterContentInit(){
    console.log('内容渲染之前');
    console.log('插槽内容'+this.paragraph.nativeElement.textContent);
  }
  ngAfterContentChecked(){
    console.log('内容检查');
  }
  ngAfterViewInit(){
    console.log('视图初始化完成');
    console.log('插槽内容'+this.paragraph.nativeElement.textContent);
  }
  ngAfterViewChecked(){
    console.log('试图完成后检查');
  }
  ngOnDestroy(){
    console.log('销毁');
  }


}
