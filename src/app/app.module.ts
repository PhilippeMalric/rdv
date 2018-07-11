import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';

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
import { TableModule } from 'primeng/table';

import { HomeComponent } from './home/home.component';
import { DocComponent } from './doc/doc.component';
import { ViewerComponent } from './viewer/viewer.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { NCMService } from './service/ncm.service';
import { FormsModule } from '@angular/forms';

import { GraphLayoutComponent } from './shared/graph-layout/graph-layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { PagePresentationComponent } from './memoire_section/avant-propos/page-presentation/page-presentation.component';
import { ResumeFrComponent } from './memoire_section/resume-abstract/resume-fr/resume-fr.component';
import { ResumeEnComponent } from './memoire_section/resume-abstract/resume-en/resume-en.component';
import { SigleEtAbreviationComponent } from './memoire_section/avant-propos/sigle-et-abreviation/sigle-et-abreviation.component';
import { DedicasseComponent } from './memoire_section/avant-propos/dedicasse/dedicasse.component';
import { RemerciementsComponent } from './memoire_section/avant-propos/remerciements/remerciements.component';
import { BeginingComponent } from './memoire_section/intro_sections/begining/begining.component';
import { AvertissementComponent } from './memoire_section/avant-propos/avertissement/avertissement.component';
import { ContexteComponent } from './memoire_section/avant-propos/contexte/contexte.component';
import { SidebarModule } from 'primeng/sidebar';
import { AccordionModule } from 'primeng/accordion';
import { DebutDeLetudeComponent } from './memoire_section/intro_sections/historique/debut-de-letude/debut-de-letude.component';
import { DeterminationDeLaStructureComponent } from './memoire_section/intro_sections/historique/determination-de-la-structure/determination-de-la-structure.component';
import { PredictionDeLaStructureComponent } from './memoire_section/intro_sections/historique/prediction-de-la-structure/prediction-de-la-structure.component';
import { FigureComponent } from './figure/figure.component';
import { PourquoiEtudierLARNComponent } from './memoire_section/avant-propos/pourquoi-etudier-l-arn/pourquoi-etudier-l-arn.component';
import { NucleotidesComponent } from './memoire_section/intro_sections/definitions/nucleotides/nucleotides.component';
import { HistoriqueComponent } from './memoire_section/intro_sections/historique/historique.component';
import { DefinitionsComponent } from './memoire_section/intro_sections/definitions/definitions.component';
import { StructureSecondaireComponent } from './memoire_section/intro_sections/definitions/structure-secondaire/structure-secondaire.component';
import { MotifCycliqueNucleotidiqueComponent } from './memoire_section/intro_sections/definitions/motif-cyclique-nucleotidique/motif-cyclique-nucleotidique.component';
import { GrapheDesTransitionsDesARNComponent } from './memoire_section/intro_sections/definitions/graphe-des-transitions-des-arn/graphe-des-transitions-des-arn.component';
import { SondageChimiqueDesARNComponent } from './memoire_section/intro_sections/definitions/sondage-chimique-des-arn/sondage-chimique-des-arn.component';
import { AgentsModificateursComponent } from './memoire_section/intro_sections/definitions/agents-modificateurs/agents-modificateurs.component';
import { RMDBComponent } from './memoire_section/intro_sections/definitions/rmdb/rmdb.component';
import { EternaComponent } from './memoire_section/intro_sections/definitions/eterna/eterna.component';
import { NCM2Component} from './ncm2/ncm2.component';
import { SousStructureComponent } from './memoire_section/intro_sections/definitions/sous-structure/sous-structure.component';
import { AvantProposComponent } from './memoire_section/avant-propos/avant-propos.component';
import { PredictionSSComponent } from './memoire_section/intro_sections/definitions/prediction-ss/prediction-ss.component';
import { VisualisationSSComponent } from './memoire_section/intro_sections/definitions/visualisation-ss/visualisation-ss.component';
import { ClassifieursComponent } from './memoire_section/intro_sections/definitions/classifieurs/classifieurs.component';
import { ReseauDeNeuronesComponent } from './memoire_section/intro_sections/definitions/classifieurs/reseau-de-neurones/reseau-de-neurones.component';
import { RegressionLogistiqueComponent } from './memoire_section/intro_sections/definitions/classifieurs/regression-logistique/regression-logistique.component';
import { MachineVecteursSupportComponent } from './memoire_section/intro_sections/definitions/classifieurs/machine-vecteurs-support/machine-vecteurs-support.component';
import { ArbresDecisionsComponent } from './memoire_section/intro_sections/definitions/classifieurs/arbres-decisions/arbres-decisions.component';
import { BoostedDecisionTreeComponent } from './memoire_section/intro_sections/definitions/classifieurs/boosted-decision-tree/boosted-decision-tree.component';
import { BayesPointMachineComponent } from './memoire_section/intro_sections/definitions/classifieurs/bayes-point-machine/bayes-point-machine.component';
import { MetriquesComponent } from './memoire_section/intro_sections/definitions/metriques/metriques.component';
import { VpComponent } from './memoire_section/intro_sections/definitions/metriques/vp/vp.component';
import { FpComponent } from './memoire_section/intro_sections/definitions/metriques/fp/fp.component';
import { TprComponent } from './memoire_section/intro_sections/definitions/metriques/tpr/tpr.component';
import { FprComponent } from './memoire_section/intro_sections/definitions/metriques/fpr/fpr.component';
import { PrecisionComponent } from './memoire_section/intro_sections/definitions/metriques/precision/precision.component';
import { RappelSensitiviteComponent } from './memoire_section/intro_sections/definitions/metriques/rappel-sensitivite/rappel-sensitivite.component';
import { F1Component } from './memoire_section/intro_sections/definitions/metriques/f1/f1.component';
import { TableDeContingenceComponent } from './memoire_section/intro_sections/definitions/metriques/table-de-contingence/table-de-contingence.component';
import { RocCurveComponent } from './memoire_section/intro_sections/definitions/metriques/roc-curve/roc-curve.component';
import { FormatFichierComponent } from './memoire_section/intro_sections/definitions/format-fichier/format-fichier.component';
import { CsvComponent } from './memoire_section/intro_sections/definitions/format-fichier/csv/csv.component';
import { JsonComponent } from './memoire_section/intro_sections/definitions/format-fichier/json/json.component';
import { CorrelationPearsonComponent } from './memoire_section/intro_sections/definitions/correlation-pearson/correlation-pearson.component';
import { VnFnComponent } from './memoire_section/intro_sections/definitions/metriques/vn-fn/vn-fn.component';
import { LogicielsComponent } from './memoire_section/intro_sections/definitions/logiciels/logiciels.component';
import { MongodbComponent } from './memoire_section/intro_sections/definitions/logiciels/mongodb/mongodb.component';
import { NodejsComponent } from './memoire_section/intro_sections/definitions/logiciels/nodejs/nodejs.component';
import { ResumeAbstractComponent } from './memoire_section/resume-abstract/resume-abstract.component';
import { Chapitre1RNASSComponent } from './memoire_section/chapitre1_RNASS/chapitre1-rnass.component';
import { ExtractionComponent } from './memoire_section/chapitre1_RNASS/extraction/extraction.component';
import { FiltrationComponent } from './memoire_section/chapitre1_RNASS/filtration/filtration.component';
import { RdatFormatComponent } from './memoire_section/chapitre1_RNASS/rdat-format/rdat-format.component';
import { RepliementInSilicoComponent } from './memoire_section/chapitre1_RNASS/repliement-in-silico/repliement-in-silico.component';
import { FooterComponent } from './footer/footer.component';

import { ContentsModule } from 'angular-contents';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { DataInfoComponent } from './memoire_section/chapitre1_RNASS/data-info/data-info.component';
import { FreqPaireeComponent } from './memoire_section/chapitre1_RNASS/freq-pairee/freq-pairee.component';
import { LongueurSeqComponent } from './memoire_section/chapitre1_RNASS/longueur-seq/longueur-seq.component';
import { AlgoMcnComponent } from './memoire_section/chapitre1_RNASS/algo-mcn/algo-mcn.component';
import { CompilationComponent } from './memoire_section/chapitre1_RNASS/compilation/compilation.component';
import { MatMenuModule } from '@angular/material/menu';
import { Chapitre3CoherenceComponent } from './memoire_section/chapitre3-coherence/chapitre3-coherence.component';
import { ApprentissageComponent } from './memoire_section/chapitre3-coherence/apprentissage/apprentissage.component';
import { ComparaisonComponent } from './memoire_section/chapitre3-coherence/comparaison/comparaison.component';
import { CombinaisonComponent } from './memoire_section/chapitre3-coherence/combinaison/combinaison.component';
import { Conclusion3Component } from './memoire_section/chapitre3-coherence/conclusion3/conclusion3.component';
import { RMDBExpNameComponent } from './memoire_section/chapitre1_RNASS/extraction/rmdb-exp-name/rmdb-exp-name.component';
import { OneLabComponent } from './memoire_section/chapitre1_RNASS/extraction/rmdb-exp-name/one-lab/one-lab.component';
import { RdvComponent } from './rdv/rdv.component';



const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'doc', component: DocComponent },
  { path: 'viewer', component: RdvComponent },
  { path: 'ncm', component: NCM2Component },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'test',
    component: NCM2Component
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
    GraphLayoutComponent,
    PagePresentationComponent,
    ResumeFrComponent,
    ResumeEnComponent,
    SigleEtAbreviationComponent,
    DedicasseComponent,
    RemerciementsComponent,
    BeginingComponent,
    ContexteComponent,
    AvertissementComponent,
    DebutDeLetudeComponent,
    DeterminationDeLaStructureComponent,
    PredictionDeLaStructureComponent,
    FigureComponent,
    PourquoiEtudierLARNComponent,
    NucleotidesComponent,
    HistoriqueComponent,
    DefinitionsComponent,
    StructureSecondaireComponent,
    MotifCycliqueNucleotidiqueComponent,
    GrapheDesTransitionsDesARNComponent,
    SondageChimiqueDesARNComponent,
    AgentsModificateursComponent,
    RMDBComponent,
    EternaComponent,
    NCM2Component,
    SousStructureComponent,
    AvantProposComponent,
    PredictionSSComponent,
    VisualisationSSComponent,
    ClassifieursComponent,
    ReseauDeNeuronesComponent,
    RegressionLogistiqueComponent,
    MachineVecteursSupportComponent,
    ArbresDecisionsComponent,
    BoostedDecisionTreeComponent,
    BayesPointMachineComponent,
    MetriquesComponent,
    VpComponent,
    FpComponent,
    TprComponent,
    FprComponent,
    PrecisionComponent,
    RappelSensitiviteComponent,
    F1Component,
    TableDeContingenceComponent,
    RocCurveComponent,
    FormatFichierComponent,
    CsvComponent,
    JsonComponent,
    CorrelationPearsonComponent,
    VnFnComponent,
    LogicielsComponent,
    MongodbComponent,
    NodejsComponent,
    ResumeAbstractComponent,
    Chapitre1RNASSComponent,
    ExtractionComponent,
    FiltrationComponent,
    RdatFormatComponent,
    RepliementInSilicoComponent,
    FooterComponent,
    DataInfoComponent,
    FreqPaireeComponent,
    LongueurSeqComponent,
    AlgoMcnComponent,
    CompilationComponent,
    Chapitre3CoherenceComponent,
    ApprentissageComponent,
    ComparaisonComponent,
    CombinaisonComponent,
    Conclusion3Component,
    RMDBExpNameComponent,
    OneLabComponent,
    RdvComponent
    
  ],
  imports: [
    
    TableModule,
    MatMenuModule,
    NgxPageScrollModule,
    ContentsModule,
    MatButtonModule,
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
    MatListModule,
    SidebarModule,
    AccordionModule

  ],
  providers: [NCMService],
  bootstrap: [AppComponent]
})
export class AppModule { }
