import { Injectable } from '@angular/core';

import { ITodo } from './todo.model'
import { todos } from './todo.data'

@Injectable()
export class TodoService {

    getTodos(): Promise<ITodo[]> {
        return new Promise(resolve => setTimeout(() => resolve(todos), 1000));
    }

    addTodo(todo: ITodo): void {
        todos.push(todo);
    }

    deleteTodo(todo: ITodo): void {
        let index = todos.indexOf(todo);
        if (index > -1) {
            todos.splice(index, 1);
        }
    }
}