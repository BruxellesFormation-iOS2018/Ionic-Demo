import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  display(item: String){
    console.log('display '+item)
    if (item == 'skills'){
      this.navCtrl.push('SkillsPage', {skills: {'c++': 10, 'swift': 8, 'java': 5}})
    }else{
      this.navCtrl.push('StudiesPage');
    }
  }

}
