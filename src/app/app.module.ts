import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MainModule } from './pages/main/main.module';
import { CoreModule } from './core/core.module';
import {PagesModule} from './pages/pages.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    MainModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
