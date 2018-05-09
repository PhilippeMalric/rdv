import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { Routes, RouterModule, Router, RouterLink, RouterLinkActive } from '@angular/router';


import { NgModel } from '@angular/forms';

import { DataScrollerModule } from 'primeng/primeng';
import { DataViewModule } from 'primeng/dataview';

import { HomeComponent } from './home/home.component';
import { DocComponent } from './doc/doc.component';
import { ViewerComponent } from './viewer/viewer.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NCMComponent } from './ncm/ncm.component';

import { NCMService } from './service/ncm.service';



const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'doc', component: DocComponent },
  { path: 'viewer', component: ViewerComponent },
  { path: 'ncm', component: NCMComponent },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];






@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    DocComponent,
    ViewerComponent,
    AboutComponent,
    PageNotFoundComponent,
    NCMComponent
  ],
  imports: [
    DataViewModule,
    DataScrollerModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [NCMService],
  bootstrap: [AppComponent]
})
export class AppModule { }
