import {Component, OnInit} from '@angular/core';
import {JwtService} from "../../service/Jwt.service";
import {Router} from "@angular/router";
import {ProposteService} from "../../service/Proposte.service";

@Component({
  selector: 'app-proposte',
  templateUrl: './proposte.component.html',
  styleUrls: ['./proposte.component.css']
})
export class ProposteComponent implements OnInit {
  protected nome: string = '';
  protected descrizione: string = '';
  protected autore: string = this.jwtService.getTokenSub();

  constructor(private jwtService: JwtService, private router: Router, private proposteService: ProposteService) {

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

  addPropose() {
    if (this.nome != '' && this.descrizione != '') {
      this.proposteService.addProposte(this.nome, this.descrizione, this.autore).pipe().subscribe();
      this.router.navigate(['/'])
    }
  }
}
