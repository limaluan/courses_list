import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
})
export class CoursesListComponent implements OnInit {
  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Joe',
        imageUrl: '',
        price: 99.99,
        code: 'XRL-8888',
        duration: 80,
        rating: 4.5,
        releaseDate: "September, 4, 2019"
      },
      {
        id: 2,
        name: 'Don',
        imageUrl: '',
        price: 40,
        code: 'XPL-2122',
        duration: 50,
        rating: 4.5,
        releaseDate: "September, 9, 2019"
      },
    ];
  }
}
