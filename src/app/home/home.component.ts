import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Course } from '../models/course.model';
import { CoursesService } from '../services/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  beginnerCourses$!: Observable<Course[]>;

  advancedCourses$!: Observable<Course[]>;

  constructor(private coursesService: CoursesService) {

  }

  ngOnInit() {

      const courses$ = this.coursesService.findAllCourses();

      this.beginnerCourses$ = courses$

      this.advancedCourses$ = courses$

  }

}
