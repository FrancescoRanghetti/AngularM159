import {Component, OnInit} from '@angular/core';
import {JwtService} from "../../service/Jwt.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  protected pathRole: string = '';
  protected nomeUtente: string = '';

  constructor(protected jwtService: JwtService, private router: Router) {
  }

  ngOnInit(): void {
    this.jwtService.isValidToken(this.jwtService.getStringToken(), this.jwtService.getTokenSub(), this.jwtService.getTokenRole()).pipe().subscribe((isValid: boolean) => {
        if (isValid) {
          console.log("Token valid")
          this.nomeUtente = this.jwtService.getTokenSub()
        }
      },
      (error) => {
        console.error("Error while checking the token: " + error);
        this.router.navigate(['/login']).then(r => {
          console.log("Redirect to login page because token is invalid")
        })
      }
    );
    if (this.jwtService.getTokenRole() == 'User') {
      this.pathRole = 'proposte'
    } else {
      this.pathRole = 'proposte-admin'
    }
  }
}
