let express = require('express');
let axios = require('axios');

let app = express()

app.use((req,res,next)=>{
    res.append('Access-Control-Allow-Origin',"*")
    res.append('Access-Control-Allow-Content-Type',"*")
    next()
})

let options={
    headers:{
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36',
        'Cookie': 'device_id=24700f9f1986800ab4fcc880530dd0ed; s=cf118wsj8e; xq_a_token=48575b79f8efa6d34166cc7bdc5abb09fd83ce63; xqat=48575b79f8efa6d34166cc7bdc5abb09fd83ce63; xq_r_token=7dcc6339975b01fbc2c14240ce55a3a20bdb7873; xq_id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOi0xLCJpc3MiOiJ1YyIsImV4cCI6MTU4OTY4MjczMCwiY3RtIjoxNTg4ODIwNzE4NDEzLCJjaWQiOiJkOWQwbjRBWnVwIn0.IzxVeylx2diRp5dbRhQzWviHTYb5dCiAALIAyM3r0LtbvOe4BlMLrgiXDDzaYG-0mvDATYy4GJqYdG7-c-OSmx6-_5ek-J6Lxxc3C5TGLWIBEoGZfvFSqE6j9m7pLSDVI8y8l4_I1nH_IOvy0tvmJVKW3lrgB2av-4vy0EGH6KjhkxwMvM1JplS12iMaXsq6EeJVpoe3rE15zVEI3xl7lKulI9jxUW8k1H56S_iWWovHL2dY9DFkbfhPlzeUtFT4iMcexKbGqNLsXXIaHfrxwddzT3MfFgprhiJ4t5LkdASsp3RNdMfasTjTEaVci_WShLaSGsSFn2bp_JFJlp1ztA; u=341588820720596; Hm_lvt_1db88642e346389874251b5a1eded6e3=1588820728; Hm_lpvt_1db88642e346389874251b5a1eded6e3=1588820728'
        }
}


app.get('/',(req,res)=>{
    res.send('apiserver')
})

app.get('/api/index/quote',async(req,res)=>{
    let httpUrl = 'https://stock.xueqiu.com/v5/stock/batch/quote.json?symbol=SH000001,SZ399001,SZ399006,HKHSI,HKHSCEI,HKHSCCI,.DJI,.IXIC,.INX'
    
    let result = await axios.get(httpUrl,options)
    res.json(result.data)
})

//热股榜
app.get('/api/index/hotstock',async(req,res)=>{
    //10全球，12是沪深，13港股，11美股
    let index = req.query.index?req.query.index:12;
    let httpUrl = `https://stock.xueqiu.com/v5/stock/hot_stock/list.json?size=8&_type=${index}&type=${index}`
    let result = await axios.get(httpUrl,options)
    res.json(result.data)
})

//股票新闻
app.get('/api/index/news',async(req,res)=>{
    //category -1推荐。 6。7*24，  105 沪深 115 科创板
    let category = req.query.category?req.query.category:-1
    let httpUrl=`https://xueqiu.com/v4/statuses/public_timeline_by_category.json?since_id=-1&max_id=-1&count=15&category=${category}`
    let result = await axios.get(httpUrl,options)
    res.json(result.data)

})

app.get('/api/choose/tools', async (req,res)=>{
    let httpUrl='https://xueqiu.com/hq/screener';
    let result= await axios.get(httpUrl)

    let reg = /SNB.data.condition =(.*?);/

    let content =reg.exec(result.data)[1]
    res.send(content)
})

app.get('/api/choose/stocks',async(req,res)=>{
    let order_by =req.query.order_by?req.query.order_by:'follow7d'
    let page=req.query.page?req.query.page:1;
    let time =new Date().getTime()
    let order=req.query.order?req.query.order:'desc'
    let httpUrl= `https://xueqiu.com/service/screener/screen?category=CN&size=10&order=desc&order_by=${order_by}&only_count=0&page=${page}&_=${time}`
    let result= await axios.get(httpUrl)
    res.json(result.data)
})

app.get('/api/choose/industries',async(req,res)=>{
    let time =new Date().getTime()
    let httpUrl= `https://xueqiu.com/service/screener/industries?category=CN&_=${time}`;
    let result= await axios.get(httpUrl);
    res.json(result.data)

})

app.get('/api/choose/areas',async(req,res)=>{
    let time =new Date().getTime()
    let httpUrl= `https://xueqiu.com/service/screener/areas?_=${time}`;
    let result= await axios.get(httpUrl);
    res.json(result.data)

})

app.listen(8081,()=>{
    console.log('server start :','http://localhost:8081')
})