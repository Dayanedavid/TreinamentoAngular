import { Component } from '@angular/core';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  imports: [ListComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project-todolist';
}
