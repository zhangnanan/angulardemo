import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../service/news.service'

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.less']
})
export class ChooseComponent implements OnInit {
industriesList=[];
areaList=[];
areas={};
tools={};
tabList=[];
toolsObj={'基本指标':[]};
currentTab='基本指标'
  constructor(public newsSer:NewsService) { }

  async ngOnInit() {
    this.getHangye();
    this.getQuyu()
    this.getTools()

    

  }

  async getHangye(){
    let result = await this.newsSer.getIndustries()
    console.log(result.data)
    this.industriesList=result.data.industries
  }

  async getQuyu(){
    let resultArea = await this.newsSer.getAreas()
    console.log(resultArea.data)
    //这是个对象，没法循环，应该的操作是循环他的key
    this.areaList=Object.keys(resultArea.data.areas)
    console.log(Object.keys(resultArea.data.areas),'areaList')
    this.areas=resultArea.data.areas
  }

  async getTools(){
    let resultTools=await this.newsSer.getTools()
    //console.log(resultTools)
    this.tools=resultTools
    let tabObj=resultTools.__zone_symbol__value
    this.tabList=Object.keys(resultTools)
    this.currentTab=this.tabList[0]
    console.log(this.tabList)
    
  }

  async getStocks(){
    let resultStocks=this.newsSer.getstock({
      order_by:'follow',
      page:1,
      order:'desc'
    })
    console.log(resultStocks)
  }

  toggleTabs(key){
    console.log(key)
  }

}
