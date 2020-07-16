import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './view/index/index.component';
import { ChooseComponent } from './view/choose/choose.component';
import { NewstockComponent } from './view/newstock/newstock.component';
import { RecommendComponent } from './component/recommend/recommend.component';
import { DayInfoComponent } from './component/day-info/day-info.component';
import { TotimePipe } from './pipe/totime.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ChooseComponent,
    NewstockComponent,
    RecommendComponent,
    DayInfoComponent,
    TotimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
