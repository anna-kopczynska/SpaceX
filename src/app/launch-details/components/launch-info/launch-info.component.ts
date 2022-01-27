import { Component, Input } from '@angular/core';
import { LaunchModel } from 'src/app/shared/models/launch.model';

@Component({
  selector: 'app-launch-info',
  templateUrl: './launch-info.component.html',
  styleUrls: ['./launch-info.component.scss'],
})
export class LaunchInfoComponent {
  @Input() details: string = '';
}
