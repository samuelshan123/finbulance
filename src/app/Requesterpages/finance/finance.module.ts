import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';

import { FinancePageRoutingModule } from './finance-routing.module';
 import { FinancePage } from './finance.page';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [

    CommonModule,
      FormsModule,
    IonicModule,
    FinancePageRoutingModule,
    ReactiveFormsModule
 

  ],
  declarations:  [FinancePage]
})
export class FinancePageModule {}



// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-finance',
//   templateUrl: './finance.page.html',
//   styleUrls: ['./finance.page.scss'],
// })
// export class FinancePage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
