import { Component } from '@angular/core';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
  <app-counter [init]="100"></app-counter>


    <hr>
    <div>
    <h1>*ngFor</h1>
    <p class="box" *ngFor="let item of [11,12,13];
                           index as i;
                           last as l;
                           first as f;
                           even as e">
    <span [class.red]="e">{{i}}-{{item}}, last:{{l}}-first:{{f}}</span>
    </p>
    </div>





    <div>
    <h1 *ngIf="isShow; else loading">*ngIf</h1>
    <ng-template #loading>loading...</ng-template>
    <button (click)="isShow=!isShow">show</button>
    </div>



    <div>
    <h1 (click)="foo($event)" >Hey</h1>
    <div 
    [style.border]="title.length+'px solid red'" 
    [innerHtml]="'<h3>Inner Html property</h3>'">
    </div>


    <div [ngClass]="{a:true,b:false,d:3>3}">ng Class inline Object</div>

    <div [ngClass]="ngClassProp()">ng Class prop Object</div>


    </div>
  `,
  styles: [`
    .box{
      border:2px solid salmon;
    },
    .red{
      background-color: red;
    }
  `]
})
export class AppComponent {

  isShow:boolean=false;
  title = 'day1';
  foo(arg)
  {
    console.log(arg);
  }
// Will be a function that returns the Class Object
// preffer on the inline Class object
  ngClassProp(){   
    return {a:true,
            b:true,
            d:3>3};
  }
}
