import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Todo-App';
  
  getTasks() {
  alert("All Tasks")
  }

  createTasks() {
  alert("Create Tasks")
  }
}
