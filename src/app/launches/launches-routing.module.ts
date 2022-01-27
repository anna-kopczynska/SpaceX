import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchesMainPageComponent } from './containers/launches-main-page/launches-main-page.component';

const routes: Routes = [
  {
    path: '',
    component: LaunchesMainPageComponent,
    children: [],
  },
  {
    path: 'details/:id',
    loadChildren: () =>
      import('./../launch-details/launch-details.module').then(
        (m) => m.LaunchDetailsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaunchesRoutingModule {}
