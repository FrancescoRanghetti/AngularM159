import {Component, OnInit} from '@angular/core';
import {Votazioni} from "../../interfaces/votazioni";
import {VotazioniService} from "../../service/votazioni.service";
import {JwtService} from "../../service/Jwt.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-votazioni',
  templateUrl: './votazioni.component.html',
  styleUrls: ['./votazioni.component.css']
})
export class VotazioniComponent implements OnInit {
  protected votazioniArray: Votazioni[] = [];
  protected pathRole: string = '';

  constructor(private votazioniService: VotazioniService, private jwtService: JwtService, private router: Router) {
  }

  ngOnInit(): void {
    this.votazioniService.getAllVotazioni().pipe().subscribe((votazioni: Votazioni[]) => {
      console.log(votazioni)
      this.votazioniArray = votazioni;
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

    if (this.jwtService.getTokenRole() == 'User') {
      this.pathRole = 'votazioni'
    } else {
      this.pathRole = 'votazioni-admin'
    }
    this.votazioniService.getAllVotazioni().pipe().subscribe((votazioni: Votazioni[]) => {
      console.log(votazioni)
      this.votazioniArray = votazioni;
    })
  }
}
