import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from '../course/button/button.component';
import { InfoComponent } from './info/info.component';
import { LoginModule } from '../login/login.module';
import { CourseModule } from '../course/course.module';
import { CoursesListComponent } from './courses-list/courses-list.component';

@NgModule({
  declarations: [CoursesComponent, HeaderComponent, InfoComponent, CoursesListComponent],
  imports: [CommonModule, SharedModule, LoginModule, CourseModule],
  exports: [CoursesComponent],
})
export class CoursesModule {}
