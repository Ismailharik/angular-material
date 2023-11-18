import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Course } from '../models/course.model';
import { Lesson } from '../models/lesson.model';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../services/course.service';
import { catchError, finalize, tap, throwError, merge } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, AfterViewInit {
  onLessonToggled(lesson:Lesson) {
    this.selection.toggle(lesson);
    console.log(this.selection.selected);

}
expandedLesson!: Lesson|null;
selection = new SelectionModel<Lesson>(true, []);
course!: Course;
  lessons!: Lesson[]
  loading = false;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  displayedColumns = ['select', 'seqNo', "description", "duration"];


  constructor(private route: ActivatedRoute,
    private coursesService: CoursesService) {
  }
  
  ngOnInit() {
    this.course = this.route.snapshot.data["course"];
    this.loadLessonsPage();
  }


  loadLessonsPage() {

    this.loading = true;

    this.coursesService.findLessons(
      this.course.id,
      this.sort?.direction ?? "asc",
      this.paginator?.pageIndex ?? 0,
      this.paginator?.pageSize ?? 3,
      this.sort?.active ?? "seqNo")
      .pipe(
        tap(lessons => this.lessons = lessons),
        catchError(err => {
          console.log("Error loading lessons", err);
          alert("Error loading lessons.");
          return throwError(err);

        }),
        finalize(() => this.loading = false)
      )
      .subscribe();

  }

  onToggleLesson(lesson:Lesson) {
    if (lesson == this.expandedLesson) {
        this.expandedLesson = null;
    }
    else {
        this.expandedLesson = lesson;
    }

}

ngAfterViewInit() {

    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
        .pipe(
            tap(() => this.loadLessonsPage())
        )
        .subscribe();


}

isAllSelected() {
    return this.selection.selected?.length == this.lessons?.length;
}

toggleAll() {
    if (this.isAllSelected()) {
        this.selection.clear();
    }
    else {
        this.selection.select(...this.lessons);
    }
}

}