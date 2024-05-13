import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LdapService {

  constructor(protected http: HttpClient) {
  }

  sendLogin(name: string, password: string): Observable<string> {
    return this.http.post<any>(`http://localhost:3200/loginLdap`, {name, password}).pipe(
      map(response => response.token)
    );
  }
}
