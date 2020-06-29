import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-megamenu',
  templateUrl: './megamenu.component.html',
  styleUrls: ['./megamenu.component.scss']
})
export class MegamenuComponent implements OnInit {

  public menuItems: any;

  @Input() public menuList:any;
  
  constructor(public router: Router) {
    
  }

  ngOnInit() {
    
  }

  goToService = (menu, submenu) => {
    this.router.navigate(['service', menu.id, submenu.id]);
  }

}
