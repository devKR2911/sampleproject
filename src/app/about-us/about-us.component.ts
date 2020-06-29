import { Component, OnInit, AfterViewChecked } from '@angular/core';

import { HttpService } from 'src/app/http.service.js';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit, AfterViewChecked {
  video;
  isDataLoaded = false;
  endPointUrl = 'data.json';

  constructor(private httpService: HttpService) {}
  ngOnInit() {
    this.httpService.getData(this.endPointUrl).subscribe(res => {
      this.video = res[3];
      this.isDataLoaded = true;
    }, err => {
      this.video = {};
      this.isDataLoaded = true;
    });
  }

  ngAfterViewChecked() {
    if (this.isDataLoaded) {
      const node = document.getElementById('dashboard-video-4') as HTMLVideoElement;
      node.play();
    }
  }
}
