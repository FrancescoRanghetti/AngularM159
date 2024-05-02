import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Votazioni} from "../interfaces/votazioni";

@Injectable({
  providedIn: 'root'
})
export class VotazioniService {

  constructor(protected http: HttpClient) {
  }

  getAllVotazioni(): Observable<Votazioni[]> {
    return this.http.get<Votazioni[]>('http://localhost:3200/votazioni');
  }

  getVotazioneById(id: number): Observable<Votazioni[]> {
    return this.http.get<Votazioni[]>(`http://localhost:3200/votazioneById/${id}`);
  }

  deleteNow(id: number) {
    return this.http.get(`http://localhost:3200/votazioni-delete-now/${id}`);
  }
}
