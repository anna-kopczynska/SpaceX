import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { LaunchModel } from '../../../shared/models/launch.model';

@Component({
  selector: 'app-launch-card',
  templateUrl: './launch-card.component.html',
  styleUrls: ['./launch-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaunchCardComponent {
  faImage = faImage;
  @Input() get launch(): LaunchModel | null {
    return this._launch;
  }
  set launch(value: LaunchModel | null) {
    if (value) {
      this._launch = value;
      this.photoUrl = value.links.flickr.original[0];
    }
  }

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  photoUrl: string | undefined = '';
  private _launch: LaunchModel | null = null;

  goToDetailsPage(lounchId: string) {
    this.router.navigate(['details', lounchId], {
      relativeTo: this.activatedRoute.parent,
    });
  }
}
