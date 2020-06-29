import { Component, OnInit, AfterViewChecked } from '@angular/core';

import { HttpService } from 'src/app/http.service.js';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit, AfterViewChecked {
  video;
  isDataLoaded = false;
  endPointUrl = 'data.json';

  constructor(private httpService: HttpService, private authService:AuthService) {}
  ngOnInit() {
    this.httpService.getData(this.endPointUrl).subscribe(res => {
      this.video = res[5];
      this.isDataLoaded = true;
    }, err => {
      this.video = {};
      this.isDataLoaded = true;
    });
    this.authService.clearAuth();
  }

  ngAfterViewChecked() {
    if (this.isDataLoaded) {
      const node = document.getElementById('dashboard-video-6') as HTMLVideoElement;
      node.play();
    }
  }
}
