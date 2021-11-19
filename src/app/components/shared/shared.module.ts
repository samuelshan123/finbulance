import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { InputComponent } from '../input/input.component';
import { MapComponent } from 'src/app/map/map.component';
import { FormsModule } from '@angular/forms';
import { TestComponent } from 'src/app/test/test.component';
import { ViewdetailsComponent } from 'src/app/viewdetails/viewdetails.component';

@NgModule({
  declarations: [InputComponent,MapComponent,TestComponent,ViewdetailsComponent],
  imports: [CommonModule, IonicModule,FormsModule],
  exports: [InputComponent],
})
export class SharedModule {}
