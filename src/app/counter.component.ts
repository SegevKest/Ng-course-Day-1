import { Component, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>
    <button (click)="add()">+</button>
    <span [ngClass]="ngClass" (change)="change()">{{counter}}</span>
    <button (click)="few()">-</button>
    </p>
  `,
  styles: [``]
})
export class CounterComponent {

  maxLimit:number;
  minLimit:number;
  counter:number=0;
  @Input() 
  set init(val){
    this.counter=val;
  }

  @Input() 
  set max(val){
      this.maxLimit=val;
    }
    @Input() 
  set min(val){
      this.minLimit=val;
    }

  onValueChange=new EventEmitter<number>();

  changes(){
    if(this.counter>=this.maxLimit)
      this.ngClass.overMax=true;
    if(this.counter<=this.minLimit)
      this.ngClass.underMin=true;
  }

  ngClass={overMax:false,underMin:false};

  add(){
    this.counter++;
    this.onValueChange.emit(this.counter);
  }
  few(){
    this.counter--;
    this.onValueChange.emit(this.counter);
  }
}
