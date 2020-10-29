import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/courses.service';

@Component({
  selector: 'app-courses',
  // templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  template: `
    <h2>{{ getTitle() }}</h2>
    <ul>
      <li *ngFor="let course of courses">{{ course }}</li>
    </ul>
  `,
})
export class CoursesComponent implements OnInit {
  title = 'List of courses';
  courses;

  getTitle() {
    return this.title;
  }
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  ngOnInit(): void {}
}
