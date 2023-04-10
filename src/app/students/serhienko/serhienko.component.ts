import { Component } from '@angular/core';

@Component({
  selector: 'app-serhienko',
  templateUrl: './serhienko.component.html',
  styleUrls: ['./serhienko.component.css']
})
export class SerhienkoComponent {

  playVideo() {
    let video = document.getElementById('myVideo') as HTMLVideoElement;
    video.play();
  }
  
}

