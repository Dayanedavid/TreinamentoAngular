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
  public list : Array<Task> = [];

  public inputValue: string = "";
  public teste : boolean = true;

  marcado = true;
  desmarcado = false;

  constructor(private service: TaskService){
    this.list = this.service.getlist();
  }

  getChecked(){
    return this.list.filter(x => x.isChecked);

  }

  getNotChecked(){
    return this.list.filter(x => !x.isChecked);
  }

  
  public delete(item: Task){
    let index = this.list.indexOf(item);

    this.service.delete(index);
  }

  public toggleEdition(item: Task): void {
    let index = this.list.indexOf(item);

    this.inputValue = this.service.toggleEdition(index);
    this.teste = !this.teste;
  }

  public changeTask(item: Task, description :string){

    let index = this.list.indexOf(item);

    if(description.length === 0){
      alert("Digite uma tarefa valiada");
      return;
    }

    this.service.update(index, description);

    this.teste = !this.teste;

  }

  onCheckboxChange(item: Task, inp : any): void {
    let index = this.list.indexOf(item);
    this.list[index].isChecked = inp.checked;

    console.log(inp);
  }
}
