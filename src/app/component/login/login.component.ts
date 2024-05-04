import {Component} from '@angular/core';
import {GeneralService} from '../../service/General.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  protected username: string = '';
  protected password: string = '';

  constructor(private generalService: GeneralService, private router: Router) {
  }

  checkLogin() {
    console.log(this.username)
    console.log(this.password)
    if (this.generalService.sendLogin(this.username, this.password).pipe().subscribe()) {
      this.router.navigate(['/']);
    }
  }
}
