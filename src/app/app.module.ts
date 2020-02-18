
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Component,NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { HttpClientModule } from '@angular/common/http';
import { StationDetailComponent } from './station-detail/station-detail.component';
import { FormsModule } from '@angular/forms';
import { CommerceComponent } from './commerce/commerce.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatSliderModule} from '@angular/material/slider';
import {MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule,MatCardModule} from '@angular/material'
import { SiteComponent } from './site/site.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { config } from 'rxjs';

const appRoutes: Routes = [
  {
    path: 'station-details',
    component: StationDetailComponent,
    data: { title: 'Station Details' }
  },
  {
    path: 'commerces',
    component: CommerceComponent,
    data: { title: 'Commerce List' }
  },
  {
    path: 'autres-sites',
    component: SiteComponent,
    data: { title: 'Autres sites' }
  },
  {
    path: 'contacts',
    component: ContactComponent,
    data: { title: 'Contact' }
  },
  {
    path: 'aboutus',
    component: AboutusComponent,
    data: { title: 'About us' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    StationDetailComponent,
    CommerceComponent,
    SiteComponent,
    ContactComponent,
    AboutusComponent,
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    MDBBootstrapModule,
    MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule,MatCardModule
  ],
  providers: [  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
