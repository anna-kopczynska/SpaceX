import { Component } from '@angular/core';
import { prepareHttpQuery } from './constants/prepare-http-query';
import { LaunchesStoreService } from './state/launches-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private readonly launchesStore: LaunchesStoreService) {
    this.launchesStore.getLaunches(prepareHttpQuery(1));
  }
}
