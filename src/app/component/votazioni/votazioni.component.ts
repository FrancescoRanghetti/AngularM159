import {Component, OnInit} from '@angular/core';
import {Votazioni} from "../../interfaces/votazioni";
import {VotazioniService} from "../../service/votazioni.service";

@Component({
  selector: 'app-votazioni',
  templateUrl: './votazioni.component.html',
  styleUrls: ['./votazioni.component.css']
})
export class VotazioniComponent implements OnInit {
  protected votazioniArray: Votazioni[] = [];

  constructor(private votazioniService: VotazioniService) {
  }

  ngOnInit(): void {
    this.votazioniService.getAllVotazioni().pipe().subscribe((votazioni: Votazioni[]) => {
      console.log(votazioni)
      this.votazioniArray = votazioni;
    })
  }
}
