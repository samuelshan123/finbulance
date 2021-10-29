import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CabservicesPage } from './cabservices.page';

const routes: Routes = [
  {
    path: '',
    component: CabservicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CabservicesPageRoutingModule {}
