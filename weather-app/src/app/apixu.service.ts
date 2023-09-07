import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApixuService {
  constructor(private http: HttpClient) {}

  getWeather(location: any) {
    return this.http.get(
      'http://api.weatherstack.com/current?access_key=7951c302c6d569897ea591148c897cc5&query=' +
        location,
    );
  }
}
