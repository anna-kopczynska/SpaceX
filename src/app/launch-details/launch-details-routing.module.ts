import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchDetailsPageComponent } from './containers/launch-detail/launch-details-page.component';

const routes: Routes = [
  {
    path: '',
    component: LaunchDetailsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaunchDetailsRoutingModule {}
