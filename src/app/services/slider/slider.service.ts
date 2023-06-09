import { Injectable, Input } from '@angular/core';

import { Music } from '../../models/music';
import { SlideInterface } from '../../models/slide';
import { SlideMusic } from '../../models/slide-music';
import { elementAt } from 'rxjs';

import { SliderPathService } from './slider-path.service';
import { AudioService } from '../audio/audio.service';

@Injectable({
  providedIn: 'root'
})
export class SliderService {
  @Input() slidePictures: SlideInterface[] = [];
  @Input() musicList: Music[] = [];
  slides: SlideMusic[] = [];

  constructor(private sliderPathService: SliderPathService, public audioService: AudioService) {
    this.musicList = audioService.getMusic();
    this.slidePictures = sliderPathService.getSlides()

    this.musicList.forEach((element, index) => {
      // console.log('trying to reg a pair: ', element, this.slidePictures[index] );

      this.slides.push({
        slide: this.slidePictures[index],
        music: element
      });
      // console.log('registered:', this.slides[index]);
      
    });
    // console.log('registered slide-music pairs:', this.slides);
  }
}
