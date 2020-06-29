import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { Router, ActivatedRoute } from '@angular/router';
// import data from '../../../assets/data/megamenu.json';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  public menuItems: any;
  public isDataLoaded = false;
  public menuUrl = 'megamenu.json';
  public activeMenuUrl = '';
  public technologyListUrl = 'technologies.json';
  public pageName = '';
  public isTechnology = false;
  constructor(
    private httpService: HttpService,
    public router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    window.scrollTo(0, 0);
    this.activatedRoute.params.subscribe(params => {
      if (params && params.type && params.type === 'technologies') {
        this.activeMenuUrl = this.technologyListUrl;
        this.pageName = 'Technologies';
        this.isTechnology = true;
      } else {
        this.activeMenuUrl = this.menuUrl;
        this.pageName = 'Services';
        this.isTechnology = false;
      }
      this.loadMenu();
    });
  }

  ngOnInit() {
    // this.menuItems = data;
    // this.isDataLoaded = true;
  }

  loadMenu() {
    this.httpService.getData(this.activeMenuUrl).subscribe(
      res => {
        this.menuItems = res;
        this.isDataLoaded = true;
      },
      err => {
        this.menuItems = [];
        this.isDataLoaded = true;
      }
    );
  }

  goTo(url) {
    if (!this.isTechnology) {
      this.router.navigate(['/' + url]);
    }
  }
}
