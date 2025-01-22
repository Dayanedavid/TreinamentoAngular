import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { last } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  lastId: number = 0;

   public listTodo : Array<Task> = [
      {description: "Fazer bolo", edition: false, isChecked:false, id: this.lastId++},
    ];

  constructor() { }

  public addTask(input: HTMLInputElement){
    
    if(input.value.length === 0){
        alert("Digite uma tarefa valiada");
        return;
    }

    let task: Task = new Task(input.value, false, this.lastId++);
    this.listTodo.push(task);

    input.value = "";
  }

  public getlist(){
    return this.listTodo;
  }

  public delete(index: number){
    this.listTodo.splice(index,1);
  }

  public update(index: number, description :string){
    this.listTodo[index].description = description;
    this.listTodo[index].edition = false;
  }

  public toggleEdition(index: number): string {
    this.listTodo[index].edition = !this.listTodo[index].edition;
    return this.listTodo[index].description; 
  }
}
