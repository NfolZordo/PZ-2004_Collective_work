import { Component } from '@angular/core';

@Component({
  selector: 'app-zadorozhnyi',
  templateUrl: './zadorozhnyi.component.html',
  styleUrls: ['./zadorozhnyi.component.css']
})
export class ZadorozhnyiComponent {

  playVideo() {
    let video = document.getElementById('myVideo') as HTMLVideoElement;
    video.play();
  }
}
