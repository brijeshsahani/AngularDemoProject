import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //added
import {HttpClientModule} from '@angular/common/http' //added for API Integration
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppendPipe } from './pipes/append.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppendPipe //added
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //added
    HttpClientModule //added for API Integration
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
