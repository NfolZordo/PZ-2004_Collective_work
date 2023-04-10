import {Component, HostBinding} from '@angular/core';
import {SKILLS} from "./constants";

@Component({
  selector: 'app-sokolov',
  templateUrl: './sokolov.component.html',
  styleUrls: ['./sokolov.component.css']
})
export class SokolovComponent {
  @HostBinding('style.--yellow') yellow = '#ffba49';
  @HostBinding('style.--sea') sea = '#20a39e';
  @HostBinding('style.--red') red = '#ef5b5b';
  @HostBinding('style.--purple') purple = '#23001e';

  SKILLS_LIST = Object.entries(SKILLS);
}
