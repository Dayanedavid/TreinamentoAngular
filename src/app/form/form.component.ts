import { Component } from '@angular/core';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

    constructor(private service: TaskService){}
    
    public addTask(input: HTMLInputElement){
      this.service.addTask(input);
    }
  

}
