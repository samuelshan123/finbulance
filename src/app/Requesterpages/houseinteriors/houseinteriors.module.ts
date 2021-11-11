import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseinteriorsPageRoutingModule } from './houseinteriors-routing.module';

import { HouseinteriorsPage } from './houseinteriors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HouseinteriorsPageRoutingModule
  ],
  declarations: [HouseinteriorsPage]
})
export class HouseinteriorsPageModule {}
