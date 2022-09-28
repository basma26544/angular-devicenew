import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  clock=""
  clockHandle: NodeJS.Timer|undefined;

  ngOnInit(){
    this.clockHandle = setInterval(()=>{
      this.clock = new Date().toLocaleString();
    },1000);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/