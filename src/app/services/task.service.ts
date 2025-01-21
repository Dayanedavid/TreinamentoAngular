import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

   public list : Array<Task> = [
      {description: "Fazer bolo", edition: false},
    ];

  constructor() { }

  public addTask(input: HTMLInputElement){
    
    if(input.value.length === 0){
        alert("Digite uma tarefa valiada");
        return;
    }

    let task: Task = new Task(input.value, false);
    this.list.push(task);

    input.value = "";
  }

  public getlist(){
    return this.list;
  }

  public delete(index: number){
    this.list.splice(index,1);
  }

  public update(index: number, description :string){
    this.list[index].description = description;
    this.list[index].edition = false;
  }

  public toggleEdition(index: number): string {
    this.list[index].edition = !this.list[index].edition;
    return this.list[index].description; 
  }
}
