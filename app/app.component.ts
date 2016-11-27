import { Component } from '@angular/core';
import { TodoListComponent } from './todo/todo-list.component'
import { Todo } from './todo/todo'
import { TodoFormComponent} from './todo/todo-form.component'

@Component({
    selector: 'todo-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    directives: [TodoFormComponent, TodoListComponent]
})

export class AppComponent { 
    title: string;
    todos: Todo[];


    constructor(){
        this.title = 'Angular2DO'
        this.todos = []
    }

    onTodoAdded(todo: Todo){
        this.todos.push(todo);        
    }
}
