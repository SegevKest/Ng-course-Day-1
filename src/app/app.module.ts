import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListModule } from './todo-list/todo-list.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule,  // Angular Module
    TodoListModule, BrowserAnimationsModule  // My Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
