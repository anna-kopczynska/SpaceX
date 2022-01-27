import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { CardModule } from '../shared/card/card.module';
import { CheckboxModule } from '../shared/checkbox/checkbox.module';
import { DatepickerModule } from '../shared/datepicker/datepicker.module';
import { SearchModule } from '../shared/search/search.module';
import { LaunchCardComponent } from './components/launch-card/launch-card.component';
import { LaunchesFiltersComponent } from './components/launches-filters/launches-filters.component';
import { LaunchesListComponent } from './components/launches-list/launches-list.component';
import { LaunchesMainPageComponent } from './containers/launches-main-page/launches-main-page.component';
import { LaunchesRoutingModule } from './launches-routing.module';

@NgModule({
  declarations: [
    LaunchCardComponent,
    LaunchesFiltersComponent,
    LaunchesListComponent,
    LaunchesMainPageComponent,
  ],
  imports: [
    CommonModule,
    LaunchesRoutingModule,
    CardModule,
    SearchModule,
    DatepickerModule,
    CheckboxModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    FontAwesomeModule,
  ],
})
export class LaunchesModule {}
