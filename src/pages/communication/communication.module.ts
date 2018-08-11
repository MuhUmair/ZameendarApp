import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommunicationPage } from './communication';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    CommunicationPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(CommunicationPage),
  ],
})
export class CommunicationPageModule {}
