import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MaterialModule } from '@nx11/material';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectsComponent } from './projects/projects.component';
import { AppRoutingModule } from './app-routing.module';
import { UiLoginModule } from '@nx11/ui-login';
import { HttpClientModule } from '@angular/common/http';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProjectComponent } from './projects/project/project.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ProjectsComponent,
    ProjectsListComponent,
    ProjectDetailComponent,
    ProjectComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    UiLoginModule
  ],
   providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
