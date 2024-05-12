import {Component, OnInit} from '@angular/core';
import {Votazioni} from "../../interfaces/votazioni";
import {VotazioniService} from "../../service/votazioni.service";
import {ActivatedRoute, Router} from "@angular/router";
import {JwtService} from "../../service/Jwt.service";
import {RisultatiService} from "../../service/Risultati.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-votazione-admin',
  templateUrl: './votazione-admin.component.html',
  styleUrls: ['./votazione-admin.component.css'],
  providers: [DatePipe]
})
export class VotazioneAdminComponent implements OnInit {
  protected votazioniArray: Votazioni[] = [];
  protected votazioneId: number = 0;
  protected href: string = '';
  protected dataCorrente: string = '';

  constructor(private votazioniService: VotazioniService, private activatedRoute: ActivatedRoute, private jwtService: JwtService, private router: Router, private risultatiService: RisultatiService) {
  }

  ngOnInit()
    :
    void {
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

    if (this.jwtService.getTokenRole() == 'User'
    ) {
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

        }))
      }
    }
  }

  getVotoById(id
                :
                number
  ) {
    this.votazioniService.getVotazioneById(id).pipe().subscribe((votazione: Votazioni[]) => {
      console.log(votazione)
      // @ts-ignore
      this.votazioniArray = [votazione];
      console.log(this.votazioniArray);
    });
  }


  deleteNow() {
    this.votazioniService.deleteNow(this.votazioneId).pipe().subscribe();
    this.router.navigate(['/votazioni']);
    // this.votazioniService.deleteNow(this.votazioneId).subscribe(() => {
    //   this.votazioniArray = this.votazioniArray.filter(votazione => votazione.id !== this.votazioneId);
    //   this.router.navigate(['/votazioni']);
    // });
  }
}
