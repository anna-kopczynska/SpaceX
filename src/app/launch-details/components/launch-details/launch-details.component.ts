import { Component, Input } from '@angular/core';
import { LaunchpadModel } from 'src/app/shared/models/launchpad.model';
import { LaunchModel } from 'src/app/shared/models/launch.model';
import { RocketModel } from '../../../shared/models/rocket.model';

@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.component.html',
  styleUrls: ['./launch-details.component.scss'],
})
export class LaunchDetailsComponent {
  @Input() launch!: LaunchModel | null;
  @Input() rocket!: RocketModel | null;
  @Input() launchpad!: LaunchpadModel | null;
}
