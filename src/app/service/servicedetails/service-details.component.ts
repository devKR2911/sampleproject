import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import data from '../../../assets/data/megamenu.json';
import { HttpService } from 'src/app/http.service.js';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss']
})
export class ServiceDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, public router: Router, private httpService: HttpService) {}

  public selectedItem: any  = {
    id: '',
    name: '',
    image: '',
    description: ''
  };

  public isDataLoaded = false;

  public menuUrl = 'megamenu.json';

  public menuItems: any;

  ngOnInit() {
    // this.menuItems = data;
    // this.getData();
    // this.isDataLoaded = true;
    this.httpService.getData(this.menuUrl).subscribe(res => {
      this.menuItems = res;
      this.getData();
      this.isDataLoaded = true;
    }, err => {
      this.menuItems = [];
      this.isDataLoaded = true;
    });
  }

  getData = () => {
    const menuId = this.route.snapshot.params.menuId;
    // const subMenuId = this.route.snapshot.params.submenuId;
    if (menuId) {
      this.selectedItem = this.menuItems.find(item => item.id === Number(menuId));
      // const details = mainNode.options.find(node => node.id === Number(subMenuId));
      // this.selectedItem = details;
      if (!this.selectedItem) {
        this.router.navigate(['services']);
      }
    } else {
      this.router.navigate(['services']);
    }
  }

}
