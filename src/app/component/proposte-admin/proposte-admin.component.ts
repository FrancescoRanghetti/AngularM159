import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {JwtService} from "../../service/Jwt.service";

@Component({
  selector: 'app-proposte-admin',
  templateUrl: './proposte-admin.component.html',
  styleUrls: ['./proposte-admin.component.css']
})
export class ProposteAdminComponent {



  constructor(private activatedRoute: ActivatedRoute, private jwtService: JwtService, private router: Router) {
  }

  ngOnInit(): void {
    this.jwtService.isValidToken(this.jwtService.getStringToken(), this.jwtService.getTokenSub(), this.jwtService.getTokenRole()).pipe().subscribe((isValid: boolean) => {
        if (isValid) {
          console.log("Token valid")
        }
      },
      (error) => {
        console.error("Error while checking the token: " + error);
        this.router.navigate(['/login']).then(r => {
          console.log("Redirect to login page because token is invalid")
        })
      });
  }
}
