import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private fb:FormBuilder) { }

  taskForm = this.fb.group({
    _id: [null],
    name: ['', Validators.required],
    task: ['', Validators.required],
  })
}
