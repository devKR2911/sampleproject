import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-viewtile',
  templateUrl: './viewtile.component.html',
  styleUrls: ['./viewtile.component.scss']
})
export class ViewtileComponent implements OnInit { 
  @Input() tileData: {
    path: string;
    id: number;
    name: string;
    description: string;
    imgUrl: string;
  };

  constructor(public router: Router, private authService:AuthService) {

  }

  ngOnInit() {
    
  }

  goToHome() {
    this.authService.onAuthendicate();
    this.router.navigate(['/home']);
}
}
