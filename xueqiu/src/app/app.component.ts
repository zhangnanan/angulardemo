import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'xueqiu';
  addActive(event){
    // event.target.className+=' active'
    console.log('e')
  }
}
