import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceproviderPage } from './serviceprovider.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceproviderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceproviderPageRoutingModule {}
