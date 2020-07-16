import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../service/news.service'


@Component({
  selector: 'app-day-info',
  templateUrl: './day-info.component.html',
  styleUrls: ['./day-info.component.less']
})
export class DayInfoComponent implements OnInit {
newsList=[];
currentTime= new Date();
  constructor(public newsSer:NewsService) { }

  ngOnInit() {
    this.newsSer.getNews(6).then((res)=>{
      console.log(res,'1')
      res.list.forEach((item,index)=>{
        item.data=JSON.parse(item.data);
      }
      )
      this.newsList=res.list
      
    })
  }

}
