import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { Routes, RouterModule, Router, RouterLink, RouterLinkActive } from '@angular/router';



import { DataScrollerModule } from 'primeng/primeng';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';

import { HomeComponent } from './home/home.component';
import { DocComponent } from './doc/doc.component';
import { ViewerComponent } from './viewer/viewer.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NCMComponent } from './ncm/ncm.component';

import { NCMService } from './service/ncm.service';
import { FormsModule } from '@angular/forms';

import { GraphLayoutComponent } from './shared/graph-layout/graph-layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { PagePresentationComponent } from './memoire_section/page-presentation/page-presentation.component';
import { ResumeFrComponent } from './memoire_section/resume-fr/resume-fr.component';
import { ResumeEnComponent } from './memoire_section/resume-en/resume-en.component';
import { SigleEtAbreviationComponent } from './memoire_section/sigle-et-abreviation/sigle-et-abreviation.component';
import { DedicasseComponent } from './memoire_section/dedicasse/dedicasse.component';
import { RemerciementsComponent } from './memoire_section/remerciements/remerciements.component';
import { BeginingComponent } from './memoire_section/intro_sections/begining/begining.component';
import { AvertissementComponent } from './memoire_section/intro_sections/avertissement/avertissement.component';
import { MyScrollspyDirective } from './my-scrollspy.directive';
import { ContexteComponent } from './memoire_section/intro_sections/contexte/contexte.component';





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
    NCMComponent,
    GraphLayoutComponent,
    PagePresentationComponent,
    ResumeFrComponent,
    ResumeEnComponent,
    SigleEtAbreviationComponent,
    DedicasseComponent,
    RemerciementsComponent,
    BeginingComponent,
    MyScrollspyDirective,
    ContexteComponent,
    AvertissementComponent
    
  ],
  imports: [
    ButtonModule,
    PanelModule,
    FormsModule,
    DropdownModule,
    DialogModule,
    DataViewModule,
    DataScrollerModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [NCMService],
  bootstrap: [AppComponent]
})
export class AppModule { }
