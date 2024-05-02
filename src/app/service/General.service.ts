import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(protected http: HttpClient) {
  }

  sendLogin(name: string, password: string): Observable<any> {
    console.log(name)
    console.log(password)
    return this.http.post<any>(`http://localhost:3200/loginLdap`, {name, password});
  }
}
