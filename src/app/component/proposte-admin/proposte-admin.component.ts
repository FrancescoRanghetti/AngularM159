import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {JwtService} from "../../service/Jwt.service";
import {Proposte} from "../../interfaces/Proposte";
import {ProposteService} from "../../service/Proposte.service";
import {RisultatiService} from "../../service/Risultati.service";

@Component({
  selector: 'app-proposte-admin',
  templateUrl: './proposte-admin.component.html',
  styleUrls: ['./proposte-admin.component.css']
})
export class ProposteAdminComponent implements OnInit {

  protected proposteArray: Proposte[] = [];

  constructor(private proposteService: ProposteService, private activatedRoute: ActivatedRoute, private jwtService: JwtService, private router: Router, private risultatiService: RisultatiService) {
  }

  ngOnInit(): void {
    this.proposteService.getAllProposte().pipe().subscribe((proposte: Proposte[]) => {
      console.log(proposte)
      this.proposteArray = proposte;
    })
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

  addPropose(id: number, nome: string, descrizione: string, autore: string) {
    if (nome != '' && descrizione != '') {
      this.proposteService.addProposteAdmin(nome, descrizione, autore).pipe().subscribe();
      this.proposteService.delelteProposta(id, nome, descrizione, autore).pipe().subscribe();
      this.risultatiService.addRisultato(nome, descrizione, autore, 0, 0, null).pipe().subscribe();
      this.ngOnInit()
    }
  }

  deleteProposta(id: number, nome: string, descrizione: string, autore: string) {
    this.proposteService.delelteProposta(id, nome, descrizione, autore).pipe().subscribe();
    this.ngOnInit()
  }
}
