import {Component, Input} from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent {
  @Input() width!: number
  @Input() progress!: number
  @Input() title!: string

  addPx(numbers: number) {
      return `${numbers}px`;
  }
}
