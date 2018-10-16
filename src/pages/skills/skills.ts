import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SkillsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skills',
  templateUrl: 'skills.html',
})
export class SkillsPage {

  skills: {[key: string]: number}
  objectKeys = Object.keys;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.skills = navParams.get('skills')
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillsPage');
    console.log(this.skills)
  }

}
