import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModalModule } from 'projects/ng-modal/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './components/demo/demo.component';
import { HeroComponent } from './components/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgModalModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
