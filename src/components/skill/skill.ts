import { Component, Input } from '@angular/core';

/**
 * Generated class for the SkillComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'skill',
  templateUrl: 'skill.html'
})
export class SkillComponent {

  @Input() title: string;
  @Input() points: number;

  constructor() {
    console.log('Hello SkillComponent Component');
    this.title = '';
    this.points = 0;
  }

}
