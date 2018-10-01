import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Components } from 'components/index';
import { Services } from 'services/index';

@NgModule({
  declarations: [
    AppComponent,
    Components
  ],
  imports: [
    BrowserModule
  ],
  providers: [ Services ],
  bootstrap: [AppComponent]
})
export class AppModule { }
