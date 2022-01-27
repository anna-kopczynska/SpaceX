import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { LaunchesFormModel } from './launches-filtes-form';

@Component({
  selector: 'app-launches-filters',
  templateUrl: './launches-filters.component.html',
  styleUrls: ['./launches-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaunchesFiltersComponent {
  @Output() searchLaunches = new EventEmitter<any>();
  searchForm = new LaunchesFormModel();

  search() {
    this.searchLaunches.emit(this.searchForm.form.value);
  }
}
