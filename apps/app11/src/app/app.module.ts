import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@nx11/material';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectsComponent } from './projects/projects.component';
import { AppRoutingModule } from './app-routing.module';
import { UiLoginModule } from '@nx11/ui-login';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ProjectsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    UiLoginModule
  ],
   providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
