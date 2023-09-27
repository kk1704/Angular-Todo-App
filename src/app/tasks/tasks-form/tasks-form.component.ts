import { Component } from '@angular/core';
import { TasksService } from 'src/app/shared/tasks.service';

@Component({
  selector: 'app-tasks-form',
  templateUrl: './tasks-form.component.html',
  styles: [
  ]
})
export class TasksFormComponent {

  submitted:boolean=false;

  constructor(public service:TasksService){

  }

  onSubmit(){
    this.submitted= true
    if (this.service.taskForm.valid)
      console.log(this.service.taskForm.value)
  }

}
