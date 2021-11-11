import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcservicesPage } from './acservices.page';

const routes: Routes = [
  {
    path: '',
    component: AcservicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcservicesPageRoutingModule {}
