import { Component, OnInit, IterableDiffers } from '@angular/core';
import {NewsService} from '../../service/news.service'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.less']
})
export class RecommendComponent implements OnInit {
  newsList=[]

  constructor(public route:ActivatedRoute,public newsSer:NewsService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params)=>{
    console.log(params.key)
      switch(params.key){
        case 'hushen':
          this.newsSer.getNews(105).then((res)=>{
            console.log(res,'1')
            res.list.forEach((item,index)=>{
              item.data=JSON.parse(item.data);
            }
            )
            this.newsList=res.list
            
          })
          break;
          case 'kechuang':
            this.newsSer.getNews(115).then((res)=>{
              console.log(res,'1')
              res.list.forEach((item,index)=>{
                item.data=JSON.parse(item.data);
              }
              )
              this.newsList=res.list
              
            })
            break;

        default:
          this.newsSer.getNews(-1).then((res)=>{
            console.log(res,'1')
            res.list.forEach((item,index)=>{
              item.data=JSON.parse(item.data);
            }
            )
            this.newsList=res.list
            
          })
      }
    })
  }

}
