import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './components/notes/notes.component';
import { NoteComponent } from './components/note/note.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { AboutProjectsComponent } from './components/about-projects/about-projects.component';
import { AboutSponsorsComponent } from './components/about-sponsors/about-sponsors.component';
import { HomeLazyComponent } from './components/home-lazy/home-lazy.component';

const routes: Routes = [ //give title for each route using "title"
  {path: "", redirectTo: "/notes", pathMatch:'full'},
  {path:"notes", title:"Notes", component:NotesComponent },
  {path:"notes/:id", title:"Single Note", component:NoteComponent }, //dynamic take id value
  {path:"about", title:"About", component:AboutComponent, 
    children:[
        {
          path:"projects", 
          title:"Projects", 
          component:AboutProjectsComponent 
        },
          {
          path:"sponsors", 
          title:"Sponsors", 
          component:AboutSponsorsComponent 
        },
      ],
    },
  // {path: "", component:HomeLazyComponent},
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },// Lazy Loading
  { path: 'analytics', loadChildren: () => import('./analytics/analytics.module').then(m => m.AnalyticsModule) }, // Lazy Loading
  {path:"**", title:"Not Found", component:NotFoundComponent }, //not found (when trigger not exist route the show this Component)

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
