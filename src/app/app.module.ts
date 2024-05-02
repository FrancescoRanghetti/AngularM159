import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './component/home/home.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {RouterOutlet} from "@angular/router";
import {NavBarComponent} from './component/nav-bar/nav-bar.component';
import {FooterComponent} from './component/footer/footer.component';
import {LoginComponent} from './component/login/login.component';
import {VotazioniComponent} from './component/votazioni/votazioni.component';
import {LoginPageComponent} from './page/login-page/login-page.component';
import {HomePageComponent} from './page/home-page/home-page.component';
import {VotazioniPageComponent} from './page/votazioni-page/votazioni-page.component';
import {VotazionePageComponent} from './page/votazione-page/votazione-page.component';
import {VotazioneComponent} from './component/votazione/votazione.component';
import {VotazioneAdminComponent} from './component/votazione-admin/votazione-admin.component';
import {VotazioneAdminPageComponent} from './page/admin/votazione-admin-page/votazione-admin-page.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    LoginComponent,
    VotazioniComponent,
    LoginPageComponent,
    HomePageComponent,
    VotazioniPageComponent,
    VotazionePageComponent,
    VotazioneComponent,
    VotazioneAdminComponent,
    VotazioneAdminPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
