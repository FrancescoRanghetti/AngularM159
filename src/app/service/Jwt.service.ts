import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {jwtDecode} from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class JwtService {


  constructor(protected http: HttpClient) {
  }

  isValidToken(token: string, username: string, role: string): Observable<boolean> {
    return this.http.get<boolean>(`http://localhost:3200/isValidToken/${token}/${username}/${role}`);
  }

  expiredJwt(token: string): Observable<string> {
    token = this.getStringToken()
    console.log("token ex: " + token)
    return this.http.get<string>(`http://localhost:3200/expiredJwt/${token}`)
  }

  getGecodedToken(): any {
    return (this.isTokenComplete(this.getStringToken())) ? jwtDecode(this.getStringToken()) : false;
    // return jwtDecode(this.getStringToken())
  }

  isTokenComplete(token: string): boolean {
    const parts = token.split('.');
    return parts.length === 3; // Un token JWT valido ha 3 parti: header, payload, firma
  }


  getTokenSub(): string {
    return this.getGecodedToken().sub;
  }

  getTokenRole(): string {
    return this.getGecodedToken().role;
  }

  getStringToken(): string {
    const TOKEN: string | null = localStorage.getItem('STRING_TOKEN');
    return TOKEN !== null ? TOKEN.toString() : '';
  }
}
