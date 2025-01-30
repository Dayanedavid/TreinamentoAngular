import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { BehaviorSubject, last, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  lastId?: string;

  private modSearch = new BehaviorSubject<boolean>(false);
  modSearch$ = this.modSearch.asObservable();


  private listSubject = new BehaviorSubject<Task[]>([]);
  listTodo$ = this.listSubject.asObservable(); 

  constructor() {
    const savedTasks = JSON.parse(sessionStorage.getItem('tasks') || '[]');
    this.listSubject.next(savedTasks); 
  }

  public addTask(input: HTMLInputElement): void {
    if (input.value.length === 0) {
      alert('Digite uma tarefa válida');
      return;
    }

    this.lastId =
      Date.now().toString(36) + Math.random().toString(36).substring(2);

    const task: Task = new Task(input.value, false, this.lastId);
    const currentList = this.listSubject.value;

    const updatedList = [...currentList, task];
    this.listSubject.next(updatedList);

    sessionStorage.setItem('tasks', JSON.stringify(updatedList));

    input.value = '';
  }

  public delete(id: string): void {
    const currentList = JSON.parse(sessionStorage.getItem('tasks') || '[]');
    const updatedList = currentList.filter((x: { id: string; }) => x.id !== id);
    console.log("peste")

    this.listSubject.next(updatedList);
    this.modSearch.next(false);
    sessionStorage.setItem('tasks', JSON.stringify(updatedList));
  }

  public update(id: string, description: string): void {
    const currentList = JSON.parse(sessionStorage.getItem('tasks') || '[]');
    let task= currentList.find((task: { id: string; }) => task.id === id);

    task.description = description;
    task.edition = false;

    this.listSubject.next([...currentList]); 
    this.modSearch.next(false);
    sessionStorage.setItem('tasks', JSON.stringify(currentList));
  }

  public updateStatus(id: string): void {

      const currentList = JSON.parse(sessionStorage.getItem('tasks') || '[]');
      let task= currentList.find((task: { id: string; }) => task.id === id);

      console.log(task);

      task.isChecked = !task.isChecked;
      task.terminationTime = new Date();
  
  
      this.listSubject.next([...currentList]);
      this.modSearch.next(false);
      sessionStorage.setItem('tasks', JSON.stringify(currentList));
    }


  public toggleEdition(index: number): string {
    
    const currentList = this.listSubject.value;
    currentList[index].edition = !currentList[index].edition;

    this.listSubject.next([...currentList]);

    return currentList[index].description;

  }

  public search(input: any): void {

    const savedTasks = JSON.parse(sessionStorage.getItem('tasks') || '[]');
    this.listSubject.next(savedTasks); 

    const filteredList = this.listSubject.value.filter((x) => {
        return x.description.toUpperCase().includes(input.value.toUpperCase());
      });

    this.listSubject.next(filteredList); 
    this.modSearch.next(true);

  }

  public resetSearch(): void {
      const savedTasks = JSON.parse(sessionStorage.getItem('tasks') || '[]');
      this.listSubject.next(savedTasks);
      this.modSearch.next(false);
    }

}
