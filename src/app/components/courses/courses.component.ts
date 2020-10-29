import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  // templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  template:`
  <h2>{{getTitle()}}</h2>
  <ul>
  <li *ngFor="let course of courses">{{course}}</li>
  </ul>
  `
})
export class CoursesComponent implements OnInit {

  title = "List of courses";
  courses = ["course1","course2","course3"];

  getTitle(){
    return this.title;

  }
  constructor() { }

  ngOnInit(): void {
  }

}
