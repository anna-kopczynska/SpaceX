import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { LaunchesStoreService } from 'src/app/state/launches-store.service';

@Component({
  selector: 'app-launch-detail',
  templateUrl: './launch-details-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaunchDetailsPageComponent {
  launchId: number = +this.route.snapshot.params['id'];
  readonly launch$ = this.launchesStore.launches$.pipe(
    map((launches) => {
      console.log(launches?.docs);
      console.log(this.launchId);
      return launches?.docs.find(
        (launch) => launch.flight_number === this.launchId
      );
    })
  );

  constructor(
    private readonly router: Router,
    private route: ActivatedRoute,
    private readonly launchesStore: LaunchesStoreService
  ) {}

  back() {
    this.router.navigate(['launches']);
  }
}
