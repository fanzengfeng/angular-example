import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private serverElement:[any] = [{type:'server',name:'万文峰',content: '结婚'}];
  // 事件
  onServerAdded(serverData:{serverName:string,serverContent:string}){
    this.serverElement.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
  onBlueprintAdded(blueprintData:{blueprintName:string,blueprintContent:string}){
    this.serverElement.push({
      type: 'blueprint',
      name: blueprintData.blueprintName,
      content: blueprintData.blueprintContent
    });
  }
  onChangeFirst(){
    this.serverElement[0].name = '龚岚';
  }
  onDestroy(){
    this.serverElement.splice(0,1);
  }
}
