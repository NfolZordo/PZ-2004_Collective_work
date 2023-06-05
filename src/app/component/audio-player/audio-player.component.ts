// !!! COMPONENT FOR TESTING ONLY !!!
import { Component } from '@angular/core';
import { Music } from '../../models/music';

// import { AuthService } from '../../services/auth.service';
// import { Component } from '@angular/core';
// import { AngularFirestore } 
// from '@angular/fire/compat/firestore';
// import { AngularFireStorage } 
// from '@angular/fire/compat/storage';
// import * as jsmediatags from 'jsmediatags';
// import { TagType } from 'jsmediatags/types';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css']
})
export class AudioPlayerComponent {

  audio = new Audio();

  musicList: Music[] = [
    {
      title: "Brain Damage",
      url: 'assets/audio/pink-floyd-brain-damage.mp3'
    },
    {
      title: "The Way You Make Me Feel (Live)",
      url: 'assets/audio/jackson-the-way-you-make-me-feel.mp3'
    },
    {
      title: "Beat it",
      url: 'assets/audio/jackson-beat-it.mp3'
    },
  ];

  trackPointer: number = 0;
  currentMusic: Music = {
    title: "",
    url: ""
  }

  play(index?: number): void {
    if (index === undefined) {
      if (this.audio.paused) {
        if (this.audio.readyState === 0) {
          this.trackPointer = 0;
          this.currentMusic = this.musicList[0];
          this.audio.src = this.currentMusic.url;
        }
        this.audio.play();
      } else {
        this.audio.pause();
      }
    } else {
      this.trackPointer = index;
      this.currentMusic = this.musicList[index];
      this.audio.src = this.currentMusic.url;
      this.audio.play();
    }
  }

  prev(): void {
    this.trackPointer--;
    this.currentMusic = this.musicList[this.trackPointer];
    this.audio.src = this.currentMusic.url;
    this.audio.play();
  }

  next(): void {
    this.trackPointer++;
    this.currentMusic = this.musicList[this.trackPointer];
    this.audio.src = this.currentMusic.url;
    this.audio.play();
  }

  volumeSlider(event: any) {
    this.audio.volume = event.target.value / 16;
  }

}