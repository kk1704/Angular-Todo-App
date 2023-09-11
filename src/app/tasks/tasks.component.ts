import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  readonly APIUrl = "http://localhost:3000/api/todoapp/"

  constructor(private http: HttpClient){

  }
  notes:any=[]

  refreshNotes(){
    this.http.get(this.APIUrl+'GetNotes').subscribe(data=>{
      this.notes=data
    })
  }

  ngOnInit(){
    this.refreshNotes()
  }

}
