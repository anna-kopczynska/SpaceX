import { ChangeDetectionStrategy, Component } from '@angular/core';
import { prepareHttpQuery } from '../../../constants/prepare-http-query';
import { SearchFormModel } from '../../../shared/models/search-form.model';
import { LaunchesStoreService } from '../../../state/launches-store.service';

@Component({
  selector: 'app-launches-main-page',
  templateUrl: './launches-main-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaunchesMainPageComponent {
  readonly launches$ = this.launchesStore.launches$;
  currentQuery!: SearchFormModel;

  constructor(private readonly launchesStore: LaunchesStoreService) {}

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
