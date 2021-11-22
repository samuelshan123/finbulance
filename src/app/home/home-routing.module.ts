import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPage } from '../main/main.page';
import { MapComponent } from '../map/map.component';
import { TestComponent } from '../test/test.component';
import { ViewdetailsComponent } from '../viewdetails/viewdetails.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {path:'',redirectTo:'/home/main',pathMatch:'full'},
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'main',
        // loadChildren: () => import('../main/main.module').then( m => m.MainPageModule)
        component:TestComponent
      },
      {
        path: 'construction',
        loadChildren: () => import('../Requesterpages/construction/construction.module').then( m => m.ConstructionPageModule)
      },
      {
        path: 'acservices',
        loadChildren: () => import('../Requesterpages/acservices/acservices.module').then( m => m.AcservicesPageModule)
      },
      {
        path: 'finance',
        loadChildren: () => import('../Requesterpages/finance/finance.module').then( m => m.FinancePageModule)
      },
    
      {
        path: 'mybooking',
        loadChildren: () => import('../Requesterpages/mybooking/mybooking.module').then( m => m.MybookingPageModule)
      },
      {
        path: 'cabservices',
        loadChildren: () => import('../Requesterpages/cabservices/cabservices.module').then( m => m.CabservicesPageModule)
      },
      {
        path: 'houseinteriors',
        loadChildren: () => import('../Requesterpages/houseinteriors/houseinteriors.module').then( m => m.HouseinteriorsPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
