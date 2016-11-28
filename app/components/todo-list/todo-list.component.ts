import { Component, Input, OnInit } from '@angular/core';


import { ITodo, Todo } from '../../shared/todo.model';
import { TodoItem } from '../../components/todo-item/todo-item.component'; 
import { TodoService } from '../../shared/todo.service';

@Component({
    selector: 'todo-list',
    templateUrl: './app/components/todo-list/todo-list.component.html',
    directives: [TodoItem],
    styleUrls: ['./app/components/todo-list/todo-list.component.css'],
    providers: [ TodoService ]
})

export class TodoListComponent implements OnInit{
    todos: Todo[];

    constructor(private todoService: TodoService){
        this.todos  = [];
        this.todoService.order = 1;
        console.log("todo-list" + this.todoService);
    }

    ngOnInit(){
        this.todoService.getTodos().then(todos => this.todos = todos);
    }


    get sortedTodos(): ITodo[]{
        return this.todos.map((todo) => todo)
        .sort((a, b) => {
            if (a.title > b.title) return 1;
            else if (a.title < b.title) return -1;
            else return 0;
        })
        .sort((a, b) => {
            if (a.done && !b.done) return 1;
            else if (!a.done && b.done) return -1;
            else return 0;
        })
    }

    onTodoDeleted(todo:Todo): void{
       this.todoService.deleteTodo(todo);
    }
}