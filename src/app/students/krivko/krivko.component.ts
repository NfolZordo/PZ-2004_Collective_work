import { Component } from '@angular/core';

@Component({
  selector: 'app-krivko',
  templateUrl: './krivko.component.html',
  styleUrls: ['./krivko.component.css']
})
export class KrivkoComponent {

  playVideo() {
    let video = document.getElementById('myVideo') as HTMLVideoElement;
    video.play();
  }
}
