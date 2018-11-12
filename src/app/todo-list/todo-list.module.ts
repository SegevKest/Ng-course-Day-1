import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TodoListComponent } from "./todo-list.component";
import { TaskComponent } from "./task.component";
import {MatButtonModule, MatInputModule,MatFormFieldModule,MatCheckboxModule} from '@angular/material';

@NgModule({
    imports:[
        CommonModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatCheckboxModule
    ],
    declarations:[
        TodoListComponent,
        TaskComponent
    ],
    exports:[
        TodoListComponent
    ]
})
export class TodoListModule{};