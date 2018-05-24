import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SessionsComponent } from './sessions/sessions.component';
import { SessionDetailsComponent } from './session-details/session-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HighlightDirective } from './highlight.directive';
import { RateComponent } from './rate/rate.component';

const appRoutes: Routes = [
  { path: 'session-details/:id', component: SessionDetailsComponent },
  {
    path: 'sessions',
    component: SessionsComponent,
    data: { title: 'All sessions' }
  },
  {
    path: '',
    redirectTo: '/sessions',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SessionsComponent,
    SessionDetailsComponent,
    PageNotFoundComponent,
    HighlightDirective,
    RateComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
