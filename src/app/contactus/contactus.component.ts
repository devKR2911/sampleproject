import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  @Input() mediaData: { path: string };

  constructor() { }

  ngOnInit() {
  }

}
