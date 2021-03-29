import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { HeroImageComponent } from './components/hero-image/hero-image.component';
import { PageContentComponent } from './components/page-content/page-content.component';
import { HeroBoxComponent } from './components/hero-box/hero-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    FormComponent,
    HeroImageComponent,
    PageContentComponent,
    HeroBoxComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
