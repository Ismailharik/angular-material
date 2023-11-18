import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Course } from "../models/course.model";
import { Lesson } from "../models/lesson.model";
type LessonSortColumn = keyof Lesson; // This defines the valid keys for sorting

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  //just for demo purpose 
  private fakeHost: string = "https://mocki.io/v1/88cdd07e-176e-4d0b-9fc1-e2d425b8267c";
  lessons: Lesson[] = [
    {
      id: 1,
      description: 'Introduction to Angular',
      longDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate temporibus, harum, asperiores fugit excepturi nam eligendi debitis error eaque itaque tempore velit doloribus dolores voluptatum quisquam placeat autem odit soluta.',
      duration: '30 mins',
      seqNo: 1,
      courseId: 101
    },
    {
      id: 2,
      description: 'Components in Angular',
      longDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate temporibus, harum, asperiores fugit excepturi nam eligendi debitis error eaque itaque tempore velit doloribus dolores voluptatum quisquam placeat autem odit soluta.',
      duration: '45 mins',
      seqNo: 2,
      courseId: 101
    },
    {
      id: 3,
      description: 'Directives and Pipes',
      longDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate temporibus, harum, asperiores fugit excepturi nam eligendi debitis error eaque itaque tempore velit doloribus dolores voluptatum quisquam placeat autem odit soluta.',
      duration: '40 mins',
      seqNo: 3,
      courseId: 101
    },
    {
      id: 4,
      description: 'Services and Dependency Injection',
      longDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate temporibus, harum, asperiores fugit excepturi nam eligendi debitis error eaque itaque tempore velit doloribus dolores voluptatum quisquam placeat autem odit soluta.',
      duration: '50 mins',
      seqNo: 4,
      courseId: 101
    },
    {
      id: 5,
      description: 'Routing in Angular',
      longDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate temporibus, harum, asperiores fugit excepturi nam eligendi debitis error eaque itaque tempore velit doloribus dolores voluptatum quisquam placeat autem odit soluta.',
      duration: '55 mins',
      seqNo: 5,
      courseId: 101
    },
    {
      id: 6,
      description: 'Introduction to Angular',
      longDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate temporibus, harum, asperiores fugit excepturi nam eligendi debitis error eaque itaque tempore velit doloribus dolores voluptatum quisquam placeat autem odit soluta.',
      duration: '30 mins',
      seqNo: 1,
      courseId: 101
    },
    {
      id: 7,
      description: 'Components in Angular',
      longDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate temporibus, harum, asperiores fugit excepturi nam eligendi debitis error eaque itaque tempore velit doloribus dolores voluptatum quisquam placeat autem odit soluta.',
      duration: '45 mins',
      seqNo: 2,
      courseId: 101
    },
    {
      id: 8,
      description: 'Directives and Pipes',
      longDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate temporibus, harum, asperiores fugit excepturi nam eligendi debitis error eaque itaque tempore velit doloribus dolores voluptatum quisquam placeat autem odit soluta.',
      duration: '40 mins',
      seqNo: 3,
      courseId: 101
    },
    {
      id: 9,
      description: 'Services and Dependency Injection',
      longDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate temporibus, harum, asperiores fugit excepturi nam eligendi debitis error eaque itaque tempore velit doloribus dolores voluptatum quisquam placeat autem odit soluta.',
      duration: '50 mins',
      seqNo: 4,
      courseId: 101
    },
    {
      id: 10,
      description: 'Routing in Angular',
      longDescription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate temporibus, harum, asperiores fugit excepturi nam eligendi debitis error eaque itaque tempore velit doloribus dolores voluptatum quisquam placeat autem odit soluta.',
      duration: '55 mins',
      seqNo: 5,
      courseId: 101
    }
  ];
  cours: Course = {
    "category": "category X",
    "courseListIcon": "https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-material-course-1.jpg",
    "description": "sdf dklfvf,kl vl,k wdf fd",
    "id": 111,
    "iconUrl": "https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-material-course-1.jpg",
    'lessonsCount': 10,
    'longDescription': 'lorem'
  };
  constructor(private http: HttpClient) { }

  findCourseById(courseId: number): Observable<Course> {
    // return this.http.get<Course>(`${this.fakeHost}`);
    return of(this.cours);
  }

  findAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.fakeHost}`);
  }

  findAllCourseLessons(courseId: number): Observable<Lesson[]> {
    // return this.http.get<Lesson[]>(`${this.fakeHost}`);
    return of(this.lessons);
  }


  findLessons(
    courseId: number, sortOrder = 'asc',
    pageNumber = 0, pageSize = 3, sortColumn = 'seqNo'): Observable<Lesson[]> {
    // let filteredLessons = this.lessons.filter(lesson => lesson.courseId === courseId);
    let filteredLessons = this.lessons;

    // Sorting
    
    // console.log(filteredLessons)
    // Pagination
    const startIndex = pageNumber * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedLessons = filteredLessons.slice(startIndex, endIndex);

    return of(paginatedLessons);
  }




}
