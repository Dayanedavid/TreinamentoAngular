import { Component } from '@angular/core';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { NavComponent } from './components/nav/nav.component';

@Component({
  selector: 'app-root',
  imports: [ListComponent, FormComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project-todolist';
}
