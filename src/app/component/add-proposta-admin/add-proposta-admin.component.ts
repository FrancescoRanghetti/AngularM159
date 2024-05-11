import {Component, OnInit} from '@angular/core';
import {JwtService} from "../../service/Jwt.service";
import {Router} from "@angular/router";
import {ProposteService} from "../../service/Proposte.service";
import {RisultatiService} from "../../service/Risultati.service";

@Component({
  selector: 'app-add-proposta-admin',
  templateUrl: './add-proposta-admin.component.html',
  styleUrls: ['./add-proposta-admin.component.css']
})
export class AddPropostaAdminComponent implements OnInit {
  protected nome: string = '';
  protected descrizione: string = '';
  protected autore: string = this.jwtService.getTokenSub();

  constructor(private jwtService: JwtService, private router: Router, private proposteService: ProposteService, private risultatiService: RisultatiService) {

  }

  ngOnInit(): void {
    this.jwtService.isValidToken(this.jwtService.getStringToken(), this.jwtService.getTokenSub(), this.jwtService.getTokenRole()).pipe().subscribe((isValid: boolean) => {
        if (isValid) {
          console.log("Token valid")
        }
      },
      (error) => {
        console.error("Error while checking the token: " + error);
        this.router.navigate(['/login']).then(r => {
          console.log("Redirect to login page because token is invalid")
        })
      });
  }

  addProposeAdmin() {
    if (this.nome != '' && this.descrizione != '') {
      this.proposteService.addProposteAdmin(this.nome, this.descrizione, this.autore).pipe().subscribe();
      this.risultatiService.addRisultato(this.nome, this.descrizione, this.autore, 0, 0, null).pipe().subscribe();

    }
  }
}
