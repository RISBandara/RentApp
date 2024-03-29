import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Course } from '../../model/course';


@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  @Input({required:true})
  course!:Course
@Output("courseClicked")
  courseClick = new EventEmitter<Course>();

  onCourseViewed(){
    alert('course clicked');
    this.courseClick.emit(this.course);
  }
}
