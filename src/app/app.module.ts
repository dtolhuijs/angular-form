import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { HeroImageComponent } from './components/hero-image/hero-image.component';
import { PageContentComponent } from './components/page-content/page-content.component';
import { HeroBoxComponent } from './components/hero-box/hero-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  declarations: [
    AppComponent,
    FormComponent,
    HeroImageComponent,
    PageContentComponent,
    HeroBoxComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
