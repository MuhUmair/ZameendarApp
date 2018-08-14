import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddRatesPage } from './add-rates';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    AddRatesPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(AddRatesPage),
  ],
})
export class AddRatesPageModule {}
