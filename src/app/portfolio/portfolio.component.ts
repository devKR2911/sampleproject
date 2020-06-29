import { Component, OnInit, AfterViewChecked } from '@angular/core';

import { HttpService } from 'src/app/http.service.js';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, AfterViewChecked {
  video;
  isDataLoaded = false;
  endPointUrl = 'data.json';

  constructor(private httpService: HttpService) {}
  ngOnInit() {
    this.httpService.getData(this.endPointUrl).subscribe(res => {
      this.video = res[4];
      this.isDataLoaded = true;
    }, err => {
      this.video = {};
      this.isDataLoaded = true;
    });
  }

  ngAfterViewChecked() {
    if (this.isDataLoaded) {
      const node = document.getElementById('dashboard-video-5') as HTMLVideoElement;
      node.play();
    }
  }
}

