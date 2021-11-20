import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConstructionPageRoutingModule } from './construction-routing.module';

import { ConstructionPage } from './construction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule  ,
    ReactiveFormsModule, 
    IonicModule,
    ConstructionPageRoutingModule
  ],
  declarations: [ConstructionPage]
})
export class ConstructionPageModule {}
