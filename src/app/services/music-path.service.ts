import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Music } from '../models/music';

@Injectable({
  providedIn: 'root'
})
export class MusicPathService {
  audioFiles: Music[] = [
    {
      title: "Brain Damage",
      url: 'assets/audio-main/pink-floyd-brain-damage.mp3'
    },
    {
      title: "Вул. Фучика",
      url: 'assets/audio-main/fuchika.mp3'
    },
    {
      title: "Beat it",
      url: 'assets/audio-main/jackson-beat-it.mp3'
    },
    {
      title: "Sadsvit: Молодість",
      url: 'assets/audio-main/molodist.mp3'
    },
    {
      title: "JVKE ft Ruel: Golden Hour",
      url: 'assets/audio-main/golden-hour.mp3'
    },
  ];

  getAudioFiles() {
    return of(this.audioFiles);
  }
}