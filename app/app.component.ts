import { Component } from '@angular/core';
import { TodoListComponent } from './components/todo-list/todo-list.component'
import { Todo } from './shared/todo.model'
import { TodoFormComponent} from './components/todo-form/todo-form.component'

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
