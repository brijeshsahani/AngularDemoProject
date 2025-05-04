import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //added
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppendPipe } from './pipes/append.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppendPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
