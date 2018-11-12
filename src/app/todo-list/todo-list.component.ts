import { Component} from '@angular/core';
import { TaskModel } from './task.model';
import {TodoListService} from './todo-list.service';

@Component({ 
  selector: 'todo-list',
  providers:[TodoListService],
  template: `
    <div>
    <h1> To Do List</h1>
    <mat-form-field class="example-full-width">
      <input matInput type="text" #taskDes placeholder="Add Task"></mat-form-field>
      <button mat-raised-button 
      color="warn" 
      (click)="service.addTask(taskDes.value)">Add task</button>
      <task-item [source]="task.value" 
      *ngFor="let task of service.tasks | keyvalue"></task-item>
      <h3>Total:{{service.totalIsDone}} / {{service.tasks.size}}</h3>
    </div>
  `,
  styles: []
})
export class TodoListComponent {

  constructor(public service:TodoListService){}
}
