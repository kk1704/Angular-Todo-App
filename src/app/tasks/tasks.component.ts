import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TasksService } from '../shared/tasks.service';
import { Tasks } from '../shared/tasks.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{

  constructor(public service: TasksService, private toastr: ToastrService){}

  ngOnInit(): void {
    this.service.getTasks() 
  }

  populateForm(selectedRecord: Tasks){
    this.service.taskForm.setValue({
      id: selectedRecord.id,
      name: selectedRecord.name,
      task: selectedRecord.task
    })
  }

  onDelete(id: string){
    if(confirm('Are you sure to delete the task?')){
      this.service.deleteTask(id).subscribe(res=> {
      this.service.getTasks()
      this.toastr.error('Deleted Successfully', 'Task deleted')
      })
    }
  
  }
}
