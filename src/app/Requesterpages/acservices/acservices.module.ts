import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcservicesPageRoutingModule } from './acservices-routing.module';

import { AcservicesPage } from './acservices.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AcservicesPageRoutingModule
  ],
  declarations: [AcservicesPage]
})
export class AcservicesPageModule {}
