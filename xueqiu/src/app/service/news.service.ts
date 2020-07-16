import { Injectable } from '@angular/core';
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  host = 'http://localhost:8081'
  constructor() { }

  async getNews(category){
    //category:-1:推荐，6->7*24,105-沪深，115-科创板
    let httpUrl =this.host +`/api/index/news?category=${category}`;
    let result= await axios.get(httpUrl)
    return result.data
  }
  async getIndustries(){
    //category:-1:推荐，6->7*24,105-沪深，115-科创板
    let httpUrl =this.host +`/api/choose/industries`;
    let result= await axios.get(httpUrl)
    return result.data
  }
  async getAreas(){
    //category:-1:推荐，6->7*24,105-沪深，115-科创板
    let httpUrl =this.host +`/api/choose/areas`;
    let result= await axios.get(httpUrl)
    return result.data
  }
  async getstock(options){
    //category:-1:推荐，6->7*24,105-沪深，115-科创板
    let httpUrl =this.host +`/api/choose/stocks`;
    let result= await axios.get(httpUrl,{
      params:options
    })
    return result.data
  }
  async getTools(){
    //category:-1:推荐，6->7*24,105-沪深，115-科创板
    let httpUrl =this.host +`/api/choose/tools`;
    let result= await axios.get(httpUrl)
    return result.data
  }
}
