import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { PageContentComponent } from './page-content/page-content.component';
import { HeroBoxComponent } from './hero-box/hero-box.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
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
