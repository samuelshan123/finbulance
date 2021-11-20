import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceproviderPageRoutingModule } from './serviceprovider-routing.module';

import { ServiceproviderPage } from './serviceprovider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceproviderPageRoutingModule
  ],
  declarations: [ServiceproviderPage]
})
export class ServiceproviderPageModule {}
