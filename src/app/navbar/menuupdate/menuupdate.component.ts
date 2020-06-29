import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-menuupdate',
  templateUrl: './menuupdate.component.html',
  styleUrls: ['./menuupdate.component.scss']
})
export class MenuupdateComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  submitMenu = (content: string) => {
    console.log(content)
    this.httpService.updateData('bins/sirvi', content).subscribe(res => {
      console.log('Success');
    }, err => {
      console.log('Error');
    });
  }
}
