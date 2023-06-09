import { Component, Input, OnInit } from '@angular/core';
import { IStudent } from './models/student';
import { Observable } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { students as studentsData } from './data/students'
import { AudioService } from './services/audio/audio.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Collective Work';
  currentPage: string;
  visible: boolean = true;
  students: IStudent[] = studentsData;
  constructor(private router: Router, public audioService: AudioService) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentPage = event.url.split('/')[1];
      }
    });
  }
  goToStudent(student: IStudent): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.router.navigate([student.url]);
    this.audioService.playParticularSong(student.audioFilePath);
  }
  getCurrentPage(): string {
    return this.currentPage;
  }

}
