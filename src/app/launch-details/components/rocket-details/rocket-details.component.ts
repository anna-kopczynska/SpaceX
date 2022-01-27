import { Component, Input } from '@angular/core';
import { LaunchpadModel } from 'src/app/shared/models/launchpad.model';
import { LaunchModel } from 'src/app/shared/models/launch.model';
import { RocketModel } from 'src/app/shared/models/rocket.model';

@Component({
  selector: 'app-rocket-details',
  templateUrl: './rocket-details.component.html',
  styleUrls: ['./rocket-details.component.scss'],
})
export class RocketDetailsComponent {
  @Input() rocket: RocketModel | null = null;
  @Input() launch: LaunchModel | null = null;
  @Input() launchpad: LaunchpadModel | null = null;
}
