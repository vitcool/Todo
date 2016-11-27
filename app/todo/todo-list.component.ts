import { Component, Input } from '@angular/core';
import { TodoItem } from './todo-item.component';  
import { Todo } from './todo'

@Component({
    selector: 'todo-list',
    templateUrl: './app/todo/todo-list.component.html',
    directives: [TodoItem],
    styleUrls: ['./app/todo/todo-list.component.css']
})

export class TodoListComponent{
    @Input() todos: Todo[];

    onTodoDeleted(todo:Todo){
       if (todo){
           let index = this.todos.indexOf(todo);
           if (index > -1){
               this.todos.splice(index, 1);
           }
       }
    }
}