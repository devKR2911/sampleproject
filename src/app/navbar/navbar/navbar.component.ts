import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/http.service.js';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  items;
  endPointUrl = 'data.json';
  showSubMenu = false;
  isDataLoaded = false;

  constructor(public router: Router, private httpService: HttpService) {}

  ngOnInit() {
      $('.navbar a').on('click', function() {
        $('.navbar-toggler').click(); // bootstrap 4.x
      });
      this.httpService.getData(this.endPointUrl).subscribe(res => {
        this.items = res;
        this.isDataLoaded = true;
      }, err => {
        this.items = [];
        this.isDataLoaded = true;
      });
  }

  // onFocus = () => {
  //   this.showSubMenu = true;
  // }

  // onBlur = () => {
  //   this.showSubMenu = false;
  // }

  goTo = (url) => {
    this.router.navigate(['/' + url]);
  }
}
