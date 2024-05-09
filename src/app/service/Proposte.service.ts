import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Proposte} from "../interfaces/Proposte";

@Injectable({
  providedIn: 'root'
})

export class ProposteService{
  constructor(protected http: HttpClient) {
  }

  getAllProposte(): Observable<Proposte[]> {
    return this.http.get<Proposte[]>('http://localhost:3200/getAllPropose');
  }
}
