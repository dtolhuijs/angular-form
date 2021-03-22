import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { PageContentComponent } from './page-content/page-content.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    FormComponent,
    HeroImageComponent,
    PageContentComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
