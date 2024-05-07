import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {empty, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LdapService {
  private jwtToken: Observable<any> = empty();

  constructor(protected http: HttpClient) {
  }

  sendLogin(name: string, password: string): Observable<string> {
    return this.http.post<any>(`http://localhost:3200/loginLdap`, {name, password}).pipe(
      map(response => response.token)
    );
  }

  getToken(): Observable<any> {
    return this.jwtToken;
  }
}
