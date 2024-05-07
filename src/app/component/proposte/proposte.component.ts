import {Component, OnInit} from '@angular/core';
import {JwtService} from "../../service/Jwt.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-proposte',
  templateUrl: './proposte.component.html',
  styleUrls: ['./proposte.component.css']
})
export class ProposteComponent implements OnInit {
  constructor(private jwtService: JwtService, private router: Router) {

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

window.addEventListener('DOMContentLoaded', (event) => {
  const form = document.getElementById('topicForm') as HTMLFormElement;

  form.onsubmit = function (e) {
    e.preventDefault();  // non so cosa faccia ma consigliano di metterlo

    const topic = (document.getElementById('topic') as HTMLInputElement).value;
    const description = (document.getElementById('description') as HTMLTextAreaElement).value;

    console.log('Tema:', topic);
    console.log('Descrizione:', description);

    // non ho capito una sega di come si mette la roba nel server
  };
});

