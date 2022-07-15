import { Component, Input, OnInit } from '@angular/core';

import { mockedCourseList } from '../../../mock';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses:any = mockedCourseList;
 
  constructor() {}

  ngOnInit(): void {
  }
}
