import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeappliancesPageRoutingModule } from './homeappliances-routing.module';

import { HomeappliancesPage } from './homeappliances.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeappliancesPageRoutingModule
  ],
  declarations: [HomeappliancesPage]
})
export class HomeappliancesPageModule {}
