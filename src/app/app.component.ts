import { Component, Input, OnInit } from '@angular/core';
import { IStudent } from './models/student';
import { Observable } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { students as data } from './data/products'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'colect';
  currentPage: string;
  visible: boolean = true;
  students: IStudent[] = data;
  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentPage = event.url.split('/')[1];
      }
    });
  }
  goToStudent(student: IStudent): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.router.navigate([student.url]);

  }
  getCurrentPage(): string {
    return this.currentPage;
    }
    
}
