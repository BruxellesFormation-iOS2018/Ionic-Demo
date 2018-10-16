import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';

/**
 * Generated class for the WeatherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class WeatherPage {

  weatherInfo: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams, public weatherProvider: WeatherProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeatherPage');
    this.weatherProvider.currentWeatherInTown('1000','be').subscribe((json) =>{
      this.weatherInfo = json
      console.log(this.weatherInfo)
    })
  }

}
