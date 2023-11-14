import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WheaterService {

   private apiKey = '6382bcc26479515eedc5eecb7474992f';


  constructor(private http: HttpClient) { }

  getWheaterData(cityName: String): Observable<any>{
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`,
      {}
    );
  }

}
