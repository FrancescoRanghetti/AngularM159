import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginPageComponent} from "./page/login-page/login-page.component";
import {HomePageComponent} from "./page/home-page/home-page.component";
import {VotazioniPageComponent} from "./page/votazioni-page/votazioni-page.component";
import {VotazionePageComponent} from "./page/votazione-page/votazione-page.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'votazioni', component: VotazioniPageComponent},
  {path: 'votazioni/:id', component: VotazionePageComponent}
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
