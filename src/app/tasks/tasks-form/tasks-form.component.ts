import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Tasks } from 'src/app/shared/tasks.model';
import { TasksService } from 'src/app/shared/tasks.service';

@Component({
  selector: 'app-tasks-form',
  templateUrl: './tasks-form.component.html',
  styles: [
  ]
})
export class TasksFormComponent {

  submitted:boolean=false;

  constructor(public service:TasksService, private toastr: ToastrService){

  }

  onSubmit(){
    this.submitted = true
    if (this.service.taskForm.valid) 
    {
      if(this.service.taskForm.get('id')?.value == '')
        this.service.postTask().subscribe(res => 
      {
        this.service.getTasks()
        this.toastr.success('Created Successfully', 'Task Created.')
        this.resetForm()
      })
      else
        this.service.putTask().subscribe(res => 
      {
        this.service.getTasks()
        this.toastr.info('Updated Successfully', 'Task updated.')
        this.resetForm()
      })
    }
  }

  resetForm(){
    this.service.taskForm.reset()
    this.submitted=false
  }

}
