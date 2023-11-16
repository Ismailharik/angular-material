import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Course } from "../models/course.model";
import { Lesson } from "../models/lesson.model";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private fakeHost: string = "https://mocki.io/v1/88cdd07e-176e-4d0b-9fc1-e2d425b8267c";

  constructor(private http: HttpClient) {}

  findCourseById(courseId: number): Observable<Course> {
    return this.http.get<Course>(`${this.fakeHost}`);
  }

  findAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.fakeHost}`);
  }

  // findAllCourseLessons(courseId: number): Observable<Lesson[]> {
  //   return this.http.get<Lesson[]>(`${this.fakeHost}`);
  // }

  // findLessons(
  //   courseId: number,
  //   sortOrder = 'asc',
  //   pageNumber = 0,
  //   pageSize = 3,
  //   sortColumn = 'seqNo'
  // ): Observable<Lesson[]> {
  //   const params = new HttpParams()
  //     .set('pageNumber', pageNumber.toString())
  //     .set('pageSize', pageSize.toString())
  //     .set('sortOrder', sortOrder)
  //     .set('sortColumn', sortColumn);

  //   // return this.http.get<Lesson[]>(`${this.fakeHost}`, { params });
  //   return this.http.get<Lesson[]>(`${this.fakeHost}`);
  // }
}
