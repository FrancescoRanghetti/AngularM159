import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {JwtService} from "../../service/Jwt.service";


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  currentPage: string = '';
  ifLogin: boolean = false;
  protected href: string = "";


  constructor(private router: Router, private jwtService: JwtService) {
  }


  ngOnInit() {
    this.href = this.router.url;
    if (this.href.includes('/login')) {
      this.ifLogin = true;
    }
  }

  public expiredJwt() {
    localStorage.clear()
    this.jwtService.expiredJwt(this.jwtService.getStringToken()).pipe().subscribe((newToken: string) => {
      localStorage.removeItem('STRING_TOKEN')
      this.jwtService.isValidToken(newToken, this.jwtService.getTokenSub(), this.jwtService.getTokenRole())
      // Todo implement method
    })
    this.router.navigate(['/login']).then(r => {
      console.log("Redirect to login page")
      console.log("localstorage: " + localStorage.getItem('STRING_TOKEN'))
    })
  }
}
