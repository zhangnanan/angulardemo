import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './view/index/index.component'
import {ChooseComponent} from './view/choose/choose.component'
import {NewstockComponent} from './view/newstock/newstock.component'
import { RecommendComponent } from './component/recommend/recommend.component';
import { DayInfoComponent } from './component/day-info/day-info.component';

const routes: Routes = [
  {
    path:"",
    component:IndexComponent,
    children:[
    {
      path:"recommend",
       component:RecommendComponent
    },
    {
      path:"dayInfo",
      component:DayInfoComponent
    },
    {
      path:"hushen",
       component:RecommendComponent
    },
    {
      path:"kechuang",
       component:RecommendComponent
    },

  ]
  },
  {
    path:"screener",
    component:ChooseComponent
  },
  {
    path:"newstock",
    component:NewstockComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
