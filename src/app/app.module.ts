import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfilePage } from './profile/profile.page';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [AppComponent,ProfilePage],
  entryComponents: [],
  imports: [BrowserModule,
    
    IonicModule.forRoot(), AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule, NgbModule, BrowserAnimationsModule ],
  providers: [NativeGeocoder,Geolocation,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
 ],
  bootstrap: [AppComponent],
})
export class AppModule {}
