import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Proposte} from "../interfaces/Proposte";

@Injectable({
  providedIn: 'root'
})

export class ProposteService {
  constructor(protected http: HttpClient) {
  }

  getAllProposte(): Observable<Proposte[]> {
    return this.http.get<Proposte[]>('http://localhost:3200/getAllPropose');
  }

  addProposte(nome: string, descrizione: string, autore: string): any {
    return this.http.post('http://localhost:3200/addPropose', {nome, descrizione, autore})
  }

  addProposteAdmin(nome: string, descrizione: string, autore: string): any {
    return this.http.post('http://localhost:3200/addProposeAdmin', {nome, descrizione, autore})
  }

  delelteProposta(id: number, nome: string, descrizione: string, autore: string): any {
    return this.http.post('http://localhost:3200/deletePropose', {id, nome, descrizione, autore})
  }
}
