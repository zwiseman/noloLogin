import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Components } from 'components/index';
import { Services } from 'services/index';

@NgModule({
  declarations: [
    AppComponent,
    Components
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ Services ],
  bootstrap: [AppComponent]
})
export class AppModule { }
