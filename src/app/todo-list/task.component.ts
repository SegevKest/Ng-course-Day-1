import { Component, Input} from '@angular/core';
import { TaskModel } from './task.model';
import { TodoListService } from './todo-list.service';

@Component({
  selector: 'task-item',
  template: `
    <div>

      <input type="checkbox"
      [checked]="task.isDone"
      (change)="task.isDone = $event.target.checked"/>
      {{task.description}}
      <button mat-mini-fab color="primary" 
      (click)="service.removeTask(task)">X</button>
    </div>
  `,
  styles: []
})
export class TaskComponent {

  @Input('source') task:TaskModel;
  constructor(public service:TodoListService){}
}
