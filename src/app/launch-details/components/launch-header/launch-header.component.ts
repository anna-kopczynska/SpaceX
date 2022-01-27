import { Component, Input } from '@angular/core';
import { faReply } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-launch-header',
  templateUrl: './launch-header.component.html',
  styleUrls: ['./launch-header.component.scss'],
})
export class LaunchHeaderComponent {
  @Input() launchNumber!: number;
  faReply = faReply;
}
