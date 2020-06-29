import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl  = environment.baseUrl;
  }

  public getData(endpoint) {
    return this.http.get(`${this.baseUrl}${endpoint}`);
  }

  public updateData(endpoint, data) {
    return this.http.put(`${this.baseUrl}${endpoint}`, data);
  }
}
