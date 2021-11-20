import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseinteriorsPage } from './houseinteriors.page';

const routes: Routes = [
  {
    path: '',
    component: HouseinteriorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseinteriorsPageRoutingModule {}
