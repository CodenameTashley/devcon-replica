import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionServiceService {

  constructor(private http: HttpClient) { }

  public getSpeakers(): Observable<any> {
    const reqUrl = 'https://sessionize.com/api/v2/m1l86vhf/view/speakers';
    return this.http.get<any>(reqUrl, {observe: 'response'});
  }
}
