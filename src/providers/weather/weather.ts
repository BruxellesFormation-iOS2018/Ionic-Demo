import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {

  private url: string = 'http://api.openweathermap.org/data/2.5/'
  private appId: string = '21b6399b754f33956fafc6064b2b9977';

  constructor(public http: HttpClient) {

  }

  currentWeatherInTown(city: string, country: string){
    var params = {'APPID': this.appId, 'zip': city+','+country, 'units': 'metric'}
    var reqOpts = {
      params: new HttpParams()
    };
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params = reqOpts.params.set(k, params[k]);
      }
    }
    return this.http.get(this.url + '/weather', reqOpts);
  }
}
