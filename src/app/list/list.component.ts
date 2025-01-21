import { Component, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from '../models/task';
import { CommonModule } from '@angular/common';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-list',
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  public inputValue: string = "";

  constructor(private service: TaskService){
    this.list = this.service.getlist();
  }

  public list : Array<Task> = [];
 
  public delete(index: number){
    this.service.delete(index);
  }

  public toggleEdition(index: number): void {
    this.inputValue = this.service.toggleEdition(index);
  }

  public changeTask(index: number, description :string){

    if(description.length === 0){
      alert("Digite uma tarefa valiada");
      return;
    }

    this.service.update(index, description);
  }

}
