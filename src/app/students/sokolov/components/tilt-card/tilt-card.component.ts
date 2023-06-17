import {Component, Input} from '@angular/core';

@Component({
  selector: 'tilt-card',
  templateUrl: './tilt-card.component.html',
  styleUrls: ['./tilt-card.component.css']
})
export class TiltCardComponent {
  @Input() imgSrc!: string
  @Input() index!: number
  @Input() title: string = ''


  ngOnInit() {
    const container = document.getElementsByClassName('card-container')[this.index] as HTMLDivElement;
    const pre = document.getElementsByClassName('card')[this.index] as HTMLDivElement;

    container.addEventListener("mousemove", (e) => {
      rotateElement(e, pre);
    });

    container.addEventListener("mouseout", () => {
      pre.style.setProperty("--rotateX", 0 + "deg");
      pre.style.setProperty("--rotateY", 0 + "deg");
    });

    function rotateElement(event: MouseEvent, element: HTMLDivElement) {
      const x = event.pageX - container.offsetLeft;
      const y = event.pageY - container.offsetTop;

      const middleX = container.offsetWidth / 2;
      const middleY = container.offsetHeight / 2;

      const offsetX = ((x - middleX) / middleX) * 45;
      const offsetY = ((y - middleY) / middleY) * 45;

      element.style.setProperty("--rotateX", offsetX + "deg");
      element.style.setProperty("--rotateY", -1 * offsetY + "deg");
    }

  }
}
