import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AudioService } from '../../services/audio/audio.service';
import { SliderService } from '../../services/slider/slider.service';

import { MatIconModule } from '@angular/material/icon';
import { SlideInterface } from '../../models/slide';
import { SlideMusic } from '../../models/slide-music';

import {
  interval,
  Observable,
  startWith,
  Subject,
  switchMap,
  timer,
} from 'rxjs';


@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, OnDestroy {
  slidesWithMusic: SlideMusic[] = [];



  @Input() slides: SlideInterface[] = [
    { url: 'assets/slides/slide-1.jpg', title: 'slide-1' },
    { url: 'assets/slides/slide-2.png', title: 'slide-2' },
    { url: 'assets/slides/slide-3.jpg', title: 'slide-3' },
    { url: 'assets/slides/slide-4.jpg', title: 'slide-4' },
    { url: 'assets/slides/slide-5.jpg', title: 'slide-5' }
  ];

  private currentIndex: number = 0;
  private timeoutId?: number;

  constructor(public audioService: AudioService, public sliderService: SliderService) {
    this.slidesWithMusic = sliderService.slides;
    console.log('registered slide-music pairs:', sliderService.slides);
  }

  ngOnInit(): void {
    this.resetTimer();
  }
  ngOnDestroy() {
    console.log('SlideshowComponent destroyed!');
    window.clearTimeout(this.timeoutId);
  }
  resetTimer() {


    if (this.timeoutId) {
      console.log('timer reset!');

      window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => this.goToNext(), 30000);
  }

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;

    this.resetTimer();
    this.currentIndex = newIndex;
    this.initPlay(this.audioService);
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.resetTimer();
    this.currentIndex = newIndex;
    this.initPlay(this.audioService);
  }

  // goToSlide(slideIndex: number): void {
  //   this.resetTimer();
  //   this.currentIndex = slideIndex;
  // }

  // getCurrentMusicUrl(): string {
  //   return `url('${this.slidesWithMusic[this.currentIndex].music.url}')`;
  // }

  initCurrentMusic(): void {
    // this.audioService.setCurrentTrack(this.currentIndex);
    this.audioService.play(this.currentIndex);

  }

  initPlay(audioService: AudioService): void {
    audioService.play(this.currentIndex);
    // console.log("(Slideshow comp)) is audio paused? ", audioService.audio.paused);

    // audioService.audio.paused ? audioService.play(audioService.getCurrentTrackIndex()) :
    //                     audioService.pause();
  }

  setCurrentSlideUrl(): string {
    return `url('${this.slidesWithMusic[this.currentIndex].slide.url}')`;
  }

}