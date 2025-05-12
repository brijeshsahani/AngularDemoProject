import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; //added note= add ReactiveFormsModule if you want to use Reactive form
// import { FormsModule,ReactiveFormsModule } from '@angular/forms'; //added note= add ReactiveFormsModule if you want to use Reactive form
import {HttpClientModule} from '@angular/common/http' //added for API Integration
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppendPipe } from './pipes/append.pipe';
import { TaskComponent } from './components/task/task.component';
import { NoteComponent } from './components/note/note.component';
import { NotesComponent } from './components/notes/notes.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { AboutProjectsComponent } from './components/about-projects/about-projects.component';
import { AboutSponsorsComponent } from './components/about-sponsors/about-sponsors.component'; //added when create component 

@NgModule({
  declarations: [
    AppComponent,
    AppendPipe, //added
    TaskComponent, NoteComponent, NotesComponent, NotFoundComponent, AboutComponent, AboutProjectsComponent, AboutSponsorsComponent //added
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
