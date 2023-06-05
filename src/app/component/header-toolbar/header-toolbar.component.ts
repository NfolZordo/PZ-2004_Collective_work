import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AudioService } from '../../services/audio/audio.service';
import { MatSliderModule } from '@angular/material/slider';
import { Router } from '@angular/router';

import { AudioPlayerComponent } from '../audio-player/audio-player.component'; //for testing only
/**
 * @title Basic toolbar
 */
@Component({
    selector: 'app-header-toolbar',
    templateUrl: './header-toolbar.component.html',
    styleUrls: ['./header-toolbar.component.css'],
    standalone: true,
    imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatSliderModule],
})



export class HeaderToolbarComponent {

    constructor(private router: Router, public audioService: AudioService) { }

    // TODO: REIMPL WITH GLOBAL CONST :
    homePageURL = '/' // !!!TEMPORARY SOLUTION!!! 

    // audioPlayer = new AudioPlayerComponent();

    goToHomePage(a: string): void {
        // console.log("go home!" + a);
        // console.log(this.router.createUrlTree);
        this.router.navigate([this.homePageURL]);
    }

    play(audioService: AudioService): void {
        // audioService.play();
        console.log("is audio paused? ", audioService.audio.paused);
        
        audioService.audio.paused ? audioService.play(audioService.getCurrentTrackIndex()) :
                            audioService.pause();
    }

    pause(audioService: AudioService): void {
        audioService.audio.pause();
    }

    volumeSlider($event: any): void {
        this.audioService.setVolume($event);
    }

    mute(audioService: AudioService) {
        let currentVolume = audioService.audio.volume;
        if (currentVolume > 0) {
            audioService.lastVolumeLevel = currentVolume;
            audioService.audio.volume = 0;
        } else {
            audioService.audio.volume = audioService.lastVolumeLevel;
        }

    }
}
