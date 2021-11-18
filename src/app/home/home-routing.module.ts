import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {path:'',redirectTo:'/home/main',pathMatch:'full'},
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'main',
        loadChildren: () => import('../main/main.module').then( m => m.MainPageModule)
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
        path: 'medical',
        loadChildren: () => import('../Requesterpages/medical/medical.module').then( m => m.MedicalPageModule)
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
