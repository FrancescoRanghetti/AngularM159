import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {JwtService} from "../../service/Jwt.service";
import {RisultatiService} from "../../service/Risultati.service";
import {Risultati} from "../../interfaces/Risultati";

@Component({
  selector: 'app-risultati',
  templateUrl: './risultati.component.html',
  styleUrls: ['./risultati.component.css']
})
export class RisultatiComponent implements OnInit {
  protected arrayRisultati: Risultati[] = [];
  protected showDetails: boolean = false;
  protected id: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private jwtService: JwtService, private router: Router, private risultatiService: RisultatiService) {
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

    this.risultatiService.getAllProposte().pipe().subscribe((risultati: Risultati[]) => {
      console.log(risultati)
      this.arrayRisultati = risultati;
    })
  }

  toggleDetails(risultato: Risultati, id: number): void {
    if (risultato.id == id) {
      this.id = id;
      this.showDetails = !this.showDetails;
    }
  }
}
