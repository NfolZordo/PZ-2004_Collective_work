import { Injectable } from '@angular/core';
import { Subject, of, takeUntil } from 'rxjs';
import { Music } from '../../models/music';
import { MusicPathService } from '../music-path.service'

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  public audio = new Audio();
  public lastVolumeLevel: number = 0;
  private musicList: Music[] = [
    // Define your music list here
  ];

  // Subject to emit the current music state
  private currentMusicSubject = new Subject<Music>();
  public currentMusic$ = this.currentMusicSubject.asObservable();

  // Subject to emit the play/pause state
  private playingSubject = new Subject<boolean>();
  public playing$ = this.playingSubject.asObservable();

  private trackPointer = 0;

  constructor(public musicPathService: MusicPathService) {
    this.audio.volume = 0;
    this.initVolume(4);
    musicPathService.getAudioFiles().subscribe(
      (music) => this.musicList = music
    );
    console.log('Registered track list:', this.musicList);

    this.audio.addEventListener('ended', () => {
      this.next();
    });
  }

  // play(index: number): void {
  //   console.log('AudioService.play() initiated. index arg:', index, "Current trackPointer:", this.trackPointer);
  //   let playPromise = this.audio.play();
  //   if (playPromise !== undefined) {
  //     playPromise.then(_ => {
  //       console.log('promise successful');
        
  //       window.setTimeout(() => {console.log('trek started, sleeping now', 10000);
  //       this.audio.pause()

  //       })

  //     })
  //       .catch(error => {
  //         console.log('Player error:', error);

  //       });
  //     // this.playingSubject.next(true);
  //   } else {
  //     this.audio.pause();
  //     // this.playingSubject.next(false);
  //   }
  // }
  //backup
  playParticularSong(audioFilePath: string): void {
    if (!audioFilePath || audioFilePath === undefined) {
      audioFilePath = "assets/audio-students/student-theme.mp3";
    }
    this.audio.src = audioFilePath;
    let playPromise = this.audio.play();
        if (playPromise !== undefined) {
          playPromise.then(_ => {
          })
          .catch(error => {
            console.log('AudioPlayer error occured:', error);
            console.log('Error occured:', error.message);
            console.log('Error:', error.error.message);
          }); }
  }


    play(index: number): void {
      console.log('AudioService.play() initiated. starting song:', this.musicList[index]);
      if (index === undefined) {
        console.log('im in first condition');
        if (this.audio.paused) {
          if (this.audio.readyState === 0) {
            this.trackPointer = 0;
          }
          this.audio.src = this.musicList[this.trackPointer].url;
          let playPromise = this.audio.play();
          if (playPromise !== undefined) {
            playPromise.then(_ => {

            })
            .catch(error => {
              console.log('Player error:', error);

            }); }
          this.playingSubject.next(true);
        } else {
          this.audio.pause();
          this.playingSubject.next(false);
        }
      } else {
        console.log('i`m here');
        
        this.trackPointer = index;
        this.audio.src = this.musicList[this.trackPointer].url;
        let playPromise = this.audio.play();
          if (playPromise !== undefined) {
            playPromise.then(_ => {

            })
            .catch(error => {
              console.log('Player error:', error);

            }); }
        this.playingSubject.next(true);
      } 
      // else {
      //   console.log('Error, wrong index type (src:AudioService)');
      // }
      this.currentMusicSubject.next(this.musicList[this.trackPointer]);
    
  }
  //   play(index: number): void {
  //     console.log('AudioService.play() initiated. index arg:', index);
  //     if (index === undefined) {
  //       console.log('im in first condition');
  //       if (this.audio.paused) {
  //         if (this.audio.readyState === 0) {
  //           this.trackPointer = 0;
  //         }
  //         this.audio.src = this.musicList[this.trackPointer].url;
  //         let playPromise = this.audio.play();
  //         if (playPromise !== undefined) {
  //           playPromise.then(_ => {

  //           })
  //           .catch(error => {
  //             console.log('Player error:', error);

  //           });
  //         this.playingSubject.next(true);
  //       } else {
  //         this.audio.pause();
  //         this.playingSubject.next(false);
  //       }
  //     } else {
  //       console.log('i`m here');
        
  //       this.trackPointer = index;
  //       this.audio.src = this.musicList[this.trackPointer].url;
  //       this.audio.play();
  //       this.playingSubject.next(true);
  //     } 
  //     // else {
  //     //   console.log('Error, wrong index type (src:AudioService)');
  //     // }
  //     this.currentMusicSubject.next(this.musicList[this.trackPointer]);
  //   }
  // }

  prev(): void {
    this.trackPointer--;
    if (this.trackPointer < 0) {
      this.trackPointer = this.musicList.length - 1;
    }
    this.audio.src = this.musicList[this.trackPointer].url;
    this.audio.play();
    this.playingSubject.next(true);
    this.currentMusicSubject.next(this.musicList[this.trackPointer]);
  }

  next(): void {
    this.trackPointer++;
    if (this.trackPointer >= this.musicList.length) {
      this.trackPointer = 0;
    }
    this.audio.src = this.musicList[this.trackPointer].url;
    this.audio.play();
    this.playingSubject.next(true);
    this.currentMusicSubject.next(this.musicList[this.trackPointer]);
  }

  pause() {
    this.audio.pause();
  }

  setVolume(volume: any): void {
    this.audio.volume = volume.target.value / 16;
  }

  initVolume(volume: number): void {
    this.audio.volume = volume / 16;
  }

  getMusic() {
    return this.musicList;
  }

  setCurrentTrackIndex(index: number): void {
    console.log('trying to set track index:', index);

    this.trackPointer = index;
  }
  getCurrentTrackIndex(): number {
    return this.trackPointer;
  }
}
