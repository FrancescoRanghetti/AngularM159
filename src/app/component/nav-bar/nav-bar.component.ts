import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  currentPage: string = '';
  ifLogin: boolean = false;
  protected href: string = "";


  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }


  ngOnInit() {
    this.href = this.router.url;
    console.log(this.router.url);
    if (this.href.includes('/login')) {
      this.ifLogin = true;
    } else {

    }
  }

  // updateNavbarStyles() {
  //   if (this.currentPage === '/login') {
  //     this.ifLogin = 'ifLoginTrue';
  //   } else {
  //     this.ifLogin = 'ifLoginFalse';
  //   }
  // }
}
