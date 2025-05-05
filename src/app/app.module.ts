import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; //added note= add ReactiveFormsModule if you want to use Reactive form
// import { FormsModule,ReactiveFormsModule } from '@angular/forms'; //added note= add ReactiveFormsModule if you want to use Reactive form
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
    ReactiveFormsModule,
    HttpClientModule //added for API Integration
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
