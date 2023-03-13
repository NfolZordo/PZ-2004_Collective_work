import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IStudent } from 'src/app/models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  @Input() student: IStudent;
  constructor(private router: Router) {}
  
  goToStudent(student: IStudent): void {
    this.router.navigate([student.url]);
  }


}
