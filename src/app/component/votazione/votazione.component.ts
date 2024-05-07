import {Component, OnInit} from '@angular/core';
import {VotazioniService} from "../../service/votazioni.service";
import {Votazioni} from "../../interfaces/votazioni";
import {ActivatedRoute, Router} from "@angular/router";
import {JwtService} from "../../service/Jwt.service";

@Component({
  selector: 'app-votazione',
  templateUrl: './votazione.component.html',
  styleUrls: ['./votazione.component.css']
})
export class VotazioneComponent implements OnInit {
  protected votazioniArray: Votazioni[] = [];
  protected votazioneId: number = 0;
  protected href: string = '';

  constructor(private votazioniService: VotazioniService, private activatedRoute: ActivatedRoute, private jwtService: JwtService, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.votazioneId = +params['id'];
      this.getVotoById(this.votazioneId);
    });
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
    console.log("role: " + this.jwtService.getTokenRole())

    if (this.jwtService.getTokenRole() == 'User') {
      this.href = this.router.url;
      console.log("href: " + this.href)
      if (this.href.includes('admin')) {
        this.router.navigate(['/']).then((r => {
          console.log("ciao")
        }))
      }
    } else {
      this.href = this.router.url;
      console.log("href: " + this.href)
      if (this.href.includes('votazioni/')) {
        this.router.navigate(['/']).then((r => {
          console.log("ciao")
        }))
      }
    }
  }

  getVotoById(id: number) {
    this.votazioniService.getVotazioneById(id).pipe().subscribe((votazione: Votazioni[]) => {
      console.log(votazione)
      // @ts-ignore
      this.votazioniArray = [votazione];
      console.log(this.votazioniArray);
    });
  }
}
