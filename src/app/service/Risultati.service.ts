import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Risultati} from "../interfaces/Risultati";

@Injectable({
  providedIn: 'root'
})

export class RisultatiService {
  constructor(protected http: HttpClient) {
  }

  getAllProposte(): Observable<Risultati[]> {
    return this.http.get<Risultati[]>('http://localhost:3200/getAllRisultati');
  }

  addVoto(id: number, si: boolean): Observable<Object> {
    return this.http.post(`http://localhost:3200/addVoto/${id}/${si}`, {})
  }

  addDeleted(id: number, deleted: string | null): Observable<Object> {
    return this.http.post(`http://localhost:3200/addDeleted/${id}/${deleted}`, {})
  }

  addRisultato(nome: string, descrizione: string, autore: string, si: number, no: number, deleted: Date | null): Observable<Object> {
    return this.http.post('http://localhost:3200/addRisultato', {nome, descrizione, autore, si, no, deleted})
  }
}
