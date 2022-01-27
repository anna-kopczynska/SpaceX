import { ChangeDetectionStrategy, Component } from '@angular/core';
import { prepareHttpQuery } from 'src/app/constants/prepare-http-query';
import { SearchFormModel } from 'src/app/shared/models/search-form.model';
import { LaunchesStoreService } from 'src/app/state/launches-store.service';

@Component({
  selector: 'app-launches-main-page',
  templateUrl: './launches-main-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaunchesMainPageComponent {
  readonly launches$ = this.launchesStore.launches$;
  currentQuery!: SearchFormModel;

  constructor(private readonly launchesStore: LaunchesStoreService) {
    this.launchesStore.getLaunches(prepareHttpQuery(1));
  }

  onSearchLaunches(query: SearchFormModel) {
    this.currentQuery = query;
    this.launchesStore.getLaunches(prepareHttpQuery(1, query));
  }

  onPageChange(pageNumber: number) {
    this.launchesStore.getLaunches(
      prepareHttpQuery(pageNumber, this.currentQuery)
    );
  }
}
