import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },



  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },

  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'acservices',
    loadChildren: () => import('./Requesterpages/acservices/acservices.module').then( m => m.AcservicesPageModule)
  },
  {
    path: 'userdetails',
    loadChildren: () => import('./userdetails/userdetails.module').then( m => m.UserdetailsPageModule)
  },
  {
    path: 'userdetails',
    loadChildren: () => import('./userdetails/userdetails.module').then( m => m.UserdetailsPageModule)
  },
    




  
      
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
