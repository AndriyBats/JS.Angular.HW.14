import { Component, OnInit } from '@angular/core';
import { ITask } from './task.interface';

@Component({
  selector: 'app-homework14',
  templateUrl: './homework14.component.html',
  styleUrls: ['./homework14.component.scss']
})
export class Homework14Component implements OnInit {

  public newNameTask!: string;
  public countTasks!: number;
  public newTask!: ITask;
  public mySendNewTask!: ITask;
 
  constructor() { }

  ngOnInit(): void {
  }
  getCountTasks(data: number): void {
    this.countTasks = data;
  }

  addNewTask(): void {
    this.newTask = {nameTask: this.newNameTask, status: false};
    this.mySendNewTask = this.newTask;
    this.newNameTask = '';
  }

}