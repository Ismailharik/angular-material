import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../models/course.model';
@Component({
  selector: 'course-card-list',
  templateUrl: './course-card-list.component.html',
  styleUrls: ['./course-card-list.component.css']
})
export class CourseCardListComponent implements OnInit {

  @Input()
  courses!:Course[]
  constructor(){

  }
  ngOnInit(): void {
  }
  editCourse(course:Course){

  }

}
