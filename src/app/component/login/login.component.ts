import {Component} from '@angular/core';
import {LdapService} from '../../service/Ldap.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  protected username: string = '';
  protected password: string = '';
  protected token: string = '';

  constructor(private ldapService: LdapService, private router: Router) {
  }

  checkLogin() {
    // console.log(this.ldapService.sendLogin(this.username, this.password).pipe().subscribe((token: string) => {
    //     this.token = token;
    //     console.log("token: " + this.token.toString())
    //   },
    if (this.username != '' && this.password != '') {
      console.log(this.ldapService.sendLogin(this.username, this.password).pipe().subscribe((token: string) => {
          this.token = token;
          console.log("Token: " + this.token.toString())
          localStorage.setItem('STRING_TOKEN', this.token.toString())
          // environment.STRING_TOKEN = this.token.toString();
          // console.log("env: " + environment.STRING_TOKEN)
          this.router.navigate(['/']).then(r => {
            console.log("Login successful, redirect to home page")
          })
        },
        (error) => {
          console.log('Error during login: ', error)
        }))
    } else {
      console.log("Both username and password are required")
    }
  }

  public getToken(): string {
    return (this.token != '') ? this.token : 'Invalid token';
  }
}
