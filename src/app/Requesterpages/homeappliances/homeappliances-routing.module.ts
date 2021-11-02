import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeappliancesPage } from './homeappliances.page';

const routes: Routes = [
  {
    path: '',
    component: HomeappliancesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeappliancesPageRoutingModule {}
