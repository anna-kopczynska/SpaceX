import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LaunchDetailsComponent } from './components/launch-details/launch-details.component';
import { LaunchDetailsPageComponent } from './containers/launch-detail/launch-details-page.component';
import { LaunchDetailsRoutingModule } from './launch-details-routing.module';
import { LaunchHeaderComponent } from './components/launch-header/launch-header.component';
import { LaunchInfoDetailsComponent } from './components/launch-info-details/launch-info-details.component';
import { LaunchInfoComponent } from './components/launch-info/launch-info.component';
import { LaunchGalleryComponent } from './components/launch-gallery/launch-gallery.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    LaunchDetailsPageComponent,
    LaunchDetailsComponent,
    LaunchDetailsComponent,
    LaunchHeaderComponent,
    LaunchInfoDetailsComponent,
    LaunchInfoComponent,
    LaunchGalleryComponent,
  ],
  imports: [CommonModule, LaunchDetailsRoutingModule, FontAwesomeModule],
})
export class LaunchDetailsModule {}
