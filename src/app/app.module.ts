// src/app/app.module.ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';
import { LoggerModule } from 'ngx-logger';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthenticationService } from './services/authentication.service';
import { NativeGeocoder } from '@awesome-cordova-plugins/native-geocoder/ngx';
import { DynamicLoaderComponent } from './components/dynamic-loader/dynamic-loader.component';
import { ComponentsModule } from './components/components.module';
import { DocumentViewer } from '@awesome-cordova-plugins/document-viewer/ngx';
import { AppService } from './services/app.service'; // Import the AppService
import { AppDataComponent } from './components/app-data/app-data.component'; // Import the AppDataComponent


@NgModule({
  declarations: [
    AppComponent,
    DynamicLoaderComponent,
    AppDataComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    LoggerModule.forRoot(environment.logging),
    ComponentsModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuardService,
    AuthenticationService,
    NativeGeocoder,
    DocumentViewer,
    AppService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent, AppDataComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
