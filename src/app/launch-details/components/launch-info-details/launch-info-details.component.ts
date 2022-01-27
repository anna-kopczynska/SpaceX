import { Component, Input } from '@angular/core';
import { LaunchModel } from 'src/app/shared/models/launch.model';

@Component({
  selector: 'app-launch-info-details',
  templateUrl: './launch-info-details.component.html',
  styleUrls: ['./launch-info-details.component.scss'],
})
export class LaunchInfoDetailsComponent {
  @Input() launch: LaunchModel | undefined;
}
