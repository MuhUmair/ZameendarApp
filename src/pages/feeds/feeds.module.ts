import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedsPage } from './feeds';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    FeedsPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(FeedsPage),
  ],
})
export class FeedsPageModule {}
