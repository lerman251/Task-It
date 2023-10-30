import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  constructor() {
  }
  taskList: string[] = [];
  taskName = '';
  onAddTask() {
    this.taskList.push(this.taskName);
  }
  onUpdateTaskName(event: Event) {
    this.taskName = (<HTMLInputElement>event.target).value;
  }
}
