import {Component, OnInit} from '@angular/core';
import {VotazioniService} from "../../service/votazioni.service";
import {ActivatedRoute, Router} from "@angular/router";
import {JwtService} from "../../service/Jwt.service";

@Component({
  selector: 'app-risultati',
  templateUrl: './risultati.component.html',
  styleUrls: ['./risultati.component.css']
})
export class RisultatiComponent implements OnInit {
  constructor(private votazioniService: VotazioniService, private activatedRoute: ActivatedRoute, private jwtService: JwtService, private router: Router) {
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
}
