import {Component, OnInit} from '@angular/core';
import {Votazioni} from "../../interfaces/votazioni";
import {VotazioniService} from "../../service/votazioni.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-votazione-admin',
  templateUrl: './votazione-admin.component.html',
  styleUrls: ['./votazione-admin.component.css']
})
export class VotazioneAdminComponent implements OnInit {
  protected votazioniArray: Votazioni[] = [];
  protected votazioneId: number = 0;

  constructor(private votazioniService: VotazioniService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.votazioneId = +params['id'];
      this.getVotoById(this.votazioneId);
    });
  }

  getVotoById(id: number) {
    this.votazioniService.getVotazioneById(id).pipe().subscribe((votazione: Votazioni[]) => {
      console.log(votazione)
      // @ts-ignore
      this.votazioniArray = [votazione];
      console.log(this.votazioniArray);
    });
  }

  deleteNow() {
    this.votazioniService.deleteNow(this.votazioneId).pipe().subscribe()
  }
}
