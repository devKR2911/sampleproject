import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  constructor(public loadingService: LoadingService) { }

  isLoading: Subject<boolean> = this.loadingService.isLoading;

  ngOnInit() {
  }

}
