import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router'
import axios from 'axios'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {
  quoteList=[]
  constructor(public router:Router,public route:ActivatedRoute) { 
    
    this.getData()
  }

  ngOnInit(): void {
  }

  async getData(){
    let result = await axios.get('http://localhost:8081/api/index/quote')
    console.log(result.data.data.items)
    this.quoteList=result.data.data.items
  }

  tabEvent(index){
    let pathList = ['recommend','dayInfo','hushen','kechuang']
    this.router.navigate(['',pathList[index]],
  {queryParams:{
    key:pathList[index]

  }}
    )
  }

}
