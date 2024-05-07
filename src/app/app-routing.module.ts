import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginPageComponent} from "./page/login-page/login-page.component";
import {HomePageComponent} from "./page/home-page/home-page.component";
import {VotazioniPageComponent} from "./page/votazioni-page/votazioni-page.component";
import {VotazionePageComponent} from "./page/votazione-page/votazione-page.component";
import {PropostePageComponent} from "./page/proposte-page/proposte-page.component";
import {RisultatiPageComponent} from "./page/risultati-page/risultati-page.component";
import {VotazioneAdminPageComponent} from "./page/admin/votazione-admin-page/votazione-admin-page.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'votazioni', component: VotazioniPageComponent},
  {path: 'votazioni/:id', component: VotazionePageComponent},
  {path: 'proposte', component: PropostePageComponent},
  {path: 'risultati', component: RisultatiPageComponent},
  {path: 'votazioni/:id', component: VotazionePageComponent},
  {path: 'votazioni-admin/:id', component: VotazioneAdminPageComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
