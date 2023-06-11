import { Component } from '@angular/core';
import { overlay } from './constants/overlay';

@Component({
  selector: 'app-riabchyk',
  templateUrl: './riabchyk.component.html',
  styleUrls: ['./riabchyk.component.css'],
})
export class RiabchykComponent {
  isOverlayVisible = false;
  overlayTitle = '';
  overlayContent = '';
  sourceLink = '';
  imageSource = '';
  technologies: string[] = [];

  hideOverlay() {
    this.isOverlayVisible = false;
  }

  handleProjectClick(projectName: string) {
    const { contentText, contentTitle, sourceLink, technologies, imageSource } =
      overlay[projectName];

    this.isOverlayVisible = true;
    this.overlayTitle = contentTitle;
    this.overlayContent = contentText;
    this.sourceLink = sourceLink;
    this.technologies = technologies;
    this.imageSource = imageSource;
  }
}
