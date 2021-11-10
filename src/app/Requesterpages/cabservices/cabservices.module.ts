import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CabservicesPageRoutingModule } from './cabservices-routing.module';

import { CabservicesPage } from './cabservices.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    CabservicesPageRoutingModule
  ],
  declarations: [CabservicesPage]
})
export class CabservicesPageModule {}
