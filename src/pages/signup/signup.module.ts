import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupPage } from './signup';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    SignupPage,
  ],
  imports: [
      ComponentsModule,
    IonicPageModule.forChild(SignupPage),
  ],
})
export class SignupPageModule {}
