import { Component, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from '../../models/task';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';

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

  constructor(private service: TaskService){
  }

  ngOnInit(): void {
    this.service.listTodo$.subscribe({
      next: (tasks) => {
        this.list = tasks;
      },
    });
  }

  getChecked(){
    return this.list.filter(x => x.isChecked);

  }

  getNotChecked(){
    return this.list.filter(x => !x.isChecked);
  }

  
  public delete(item: Task){
    this.service.delete(item.id);
  }

  public toggleEdition(item: Task): void {
    let index = this.list.indexOf(item);

    this.inputValue = this.service.toggleEdition(index);
    this.teste = !this.teste;
  }

  public changeTask(item: Task, description :string){


    if(description.length === 0){
      alert("Digite uma tarefa valida");
      return;
    }

    this.service.update(item.id, description);

    this.teste = !this.teste;

  }

  onCheckboxChange(item: Task, inp : any): void {
    this.service.updateStatus(item.id);
  }

  resetSearch(): void {
    this.service.resetSearch();
  }
}
