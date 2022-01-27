import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { LaunchesStoreService } from 'src/app/state/launches-store.service';

@Component({
  selector: 'app-launch-detail',
  templateUrl: './launch-details-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaunchDetailsPageComponent {
  launchId: string = this.route.snapshot.params['id'];
  readonly launch$ = this.launchesStore.launch$.pipe(
    tap((launch) => {
      if (launch) {
        this.launchesStore.getRocket(launch.rocket);
        this.launchesStore.getLaunchpad(launch.launchpad);
      }
    })
  );
  readonly rocket$ = this.launchesStore.rocket$;
  readonly launchpad$ = this.launchesStore.launchpad$;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly launchesStore: LaunchesStoreService
  ) {
    this.launchesStore.getLaunch(this.launchId);
  }

  ngOnDestroy(): void {
    this.launchesStore.clearLaunch();
  }
}
