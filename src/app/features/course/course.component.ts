import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  title!: string;
  description!: string;
  creationDate!: Date;
  duration!: number;
  authors!: string[];

  @Input() course: any;
  @Input() editable!:boolean;

  @Output() newItemEvent = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}
}
