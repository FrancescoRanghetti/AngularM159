import { Component } from '@angular/core';
import {GeneralService} from "../../service/General.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-proposte',
  templateUrl: './proposte.component.html',
  styleUrls: ['./proposte.component.css']
})
export class ProposteComponent {
  protected nome: string = '';
  protected descrizione: string = '';
  protected autore: string = '';

  constructor(private generalService: GeneralService, private router: Router) {
    //private.jwtService:JwtService
  }

  propose() {
    console.log(this.nome)
    console.log(this.descrizione)

    //console.log(jwtService.getTokenSub())
  }
}

