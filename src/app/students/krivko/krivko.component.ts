import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-krivko',
  templateUrl: './krivko.component.html',
  styleUrls: ['./krivko.component.css']
})
export class KrivkoComponent {
  viewportScroller: ViewportScroller
  @ViewChild('myCV') cvSection?: ElementRef;

  playVideo() {
    let video = document.getElementById('myVideo') as HTMLVideoElement;
    video.play();
  }

  goToCV(): void {
    window.scrollTo({ top: (923), behavior: 'smooth' });
  }
}
