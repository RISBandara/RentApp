import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { COURSES } from '../db-data';
import { Course } from '../model/course';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CoursesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   coreCourse = COURSES[0];
   rxjsCourse = COURSES[1];
   nxjsCourse = COURSES[2];
   title = 'Inudi Rent a car';

   clickCardView(course:Course){
    console.log(course);
   }
}
