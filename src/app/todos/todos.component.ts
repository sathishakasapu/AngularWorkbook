import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TODOS } from '../mock-todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass']
})
export class TodosComponent implements OnInit {

  todos = TODOS;

  todo: Todo =  {
    id: 1,
    name: 'Excercise' 
  };

  selectedTodo: Todo;
  onSelect(todo: Todo): void {
    this.selectedTodo = todo;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
