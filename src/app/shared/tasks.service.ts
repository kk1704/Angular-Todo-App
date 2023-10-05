import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private fb:FormBuilder, private http: HttpClient) { }

  readonly baseURL = 'http://localhost:5000/todo/';
  Tasks: any = [];

  taskForm = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    task: ['', Validators.required],
  })

  getTasks(){
    this.http.get(this.baseURL)
    .pipe(catchError(this.errorHandler))
    .subscribe(data => {
      this.Tasks = data
      console.log(data)
    })
  }

  postTask(){
    return this.http.post(this.baseURL, this.taskForm.value)
    .pipe(catchError(this.errorHandler))
  }

  putTask(){
    return this.http.put(this.baseURL+this.taskForm.get('id')?.value, this.taskForm.value)
    .pipe(catchError(this.errorHandler))
  }

  deleteTask(id: string){
    return this.http.delete(this.baseURL + id)
    .pipe(catchError(this.errorHandler))
  }

  private errorHandler(error: HttpErrorResponse){
    if (error.status === 0){
      console.error('An error occurred:', error.error)
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error
      )
    }
    return throwError(() => new Error('Something bad happened; please try again later.'))
  }
}
