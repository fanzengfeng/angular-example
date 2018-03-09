import { Directive,Renderer2,OnInit,ElementRef,HostListener,HostBinding,Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighight]'
})
export class BetterHighightDirective implements OnInit{
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighight') highightColor:string ='blue';
  @HostBinding('style.backgroundColor') backgroundColor:string;  //设置样式
  @HostBinding('class') elClass:string; //设置类
  constructor(private elRef:ElementRef,private render:Renderer2) { }
  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }
  @HostListener('mouseenter') mouseover(eventData:Event){
    this.render.setStyle(this.elRef.nativeElement,'background-color','blue');
    // this.backgroundColor = this.highightColor;
    // this.elClass = 'ss';
    this.render.setAttribute(this.elRef.nativeElement,'class','set');
    
  }
  @HostListener('mouseleave') mouseleave(eventData:Event){
    // this.backgroundColor = this.defaultColor;
    this.render.setStyle(this.elRef.nativeElement,'background-color','transparent');
    // this.elClass = 'pp';
    this.render.setAttribute(this.elRef.nativeElement,'class','get');
  }

}
