import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  modoSearch = false;

  ngOnInit(): void {
    this.service.modSearch$.subscribe({
      next: (md) => {
        this.modoSearch = md;
      },
    });
  }

  constructor(private service: TaskService){}

  public search(input: any){
    this.modoSearch = true;
    this.service.search(input);
    input.value = "";
  }

  resetSearch(){
    this.modoSearch = false;
    this.service.resetSearch();
  }

}
