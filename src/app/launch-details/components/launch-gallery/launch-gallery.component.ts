import { Component, Input } from '@angular/core';
import { faImage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-launch-gallery',
  templateUrl: './launch-gallery.component.html',
  styleUrls: ['./launch-gallery.component.scss'],
})
export class LaunchGalleryComponent {
  @Input() rocketGallery: string[] = [];
  @Input() launchGallery: string[] = [];
}
