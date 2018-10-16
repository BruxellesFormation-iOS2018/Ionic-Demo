import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SkillsPage } from './skills';
import { SkillComponent } from '../../components/skill/skill';

@NgModule({
  declarations: [
    SkillsPage,
    SkillComponent
  ],
  imports: [
    IonicPageModule.forChild(SkillsPage),
  ],
})
export class SkillsPageModule {}
