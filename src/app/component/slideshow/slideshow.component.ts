import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, OnDestroy {
  slideIndex = 1;
  interval: any;

  ngOnInit() {
    this.showSlides();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  prevSlide() {
    this.showSlides(this.slideIndex -= 1);
  }

  nextSlide() {
    this.showSlides(this.slideIndex += 1);
  }

  showSlides(n = 1) {
    const slides = document.getElementsByClassName('slide') as HTMLCollectionOf<HTMLElement>;
    const prev = document.getElementsByClassName('prev') as HTMLCollectionOf<HTMLElement>;
    const next = document.getElementsByClassName('next') as HTMLCollectionOf<HTMLElement>;
    // Wrap slides around
    if (n > slides.length) { this.slideIndex = 1; }
    if (n < 1) { this.slideIndex = slides.length; }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.opacity = '0';
    }

    // Show current slide
    slides[this.slideIndex - 1].style.opacity = '1';

    // Add active class to prev/next buttons
    if (prev && next) {
      prev[0].className = prev[0].className.replace(' active', '');
      next[0].className = next[0].className.replace(' active', '');
      if (this.slideIndex === 1) { prev[0].className += ' active'; }
      if (this.slideIndex === slides.length) { next[0].className += ' active'; }
    }

    // Automatically switch slides every 5 seconds
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.showSlides(this.slideIndex += 1);
    }, 5000);
  }
}