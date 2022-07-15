import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [CourseComponent, ButtonComponent],
  imports: [CommonModule],
  exports: [CourseComponent, ButtonComponent],
})
export class CourseModule {}
