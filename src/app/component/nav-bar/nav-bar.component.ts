import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  currentPage: string = '';
  ifLogin: string = 'ifLoginTrue';
  ifLoginOut: string = 'ifLoginOutTrue'

  constructor(private router: Router) {
  }

  ngOnInit() {
    // @ts-ignore
    // this.router.events.subscribe((event: RouterEvent) => {
    //   if (event instanceof NavigationEnd) {
    //     this.currentPage = event.urlAfterRedirects;
    //     this.updateNavbarStyles(); // Call the function to update styles
    //   }
    // });
  }

  // updateNavbarStyles() {
  //   if (this.currentPage === '/login') {
  //     this.ifLogin = 'ifLoginTrue';
  //   } else {
  //     this.ifLogin = 'ifLoginFalse';
  //   }
  // }
}
