import { Component, OnInit, AfterViewChecked } from '@angular/core';

import { HttpService } from 'src/app/http.service.js';

@Component({
  selector: 'app-we',
  templateUrl: './we.component.html',
  styleUrls: ['./we.component.scss']
})
export class WeComponent implements OnInit, AfterViewChecked {
  video;
  isDataLoaded = false;
  endPointUrl = 'data.json';

  constructor(private httpService: HttpService) {}
  ngOnInit() {
    this.httpService.getData(this.endPointUrl).subscribe(res => {
      this.video = res[2];
      this.isDataLoaded = true;
    }, err => {
      this.video = {};
      this.isDataLoaded = true;
    });
  }

  ngAfterViewChecked() {
    if (this.isDataLoaded) {
      const node = document.getElementById('dashboard-video-3') as HTMLVideoElement;
      node.play();
    }
  }
}
