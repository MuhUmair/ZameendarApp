import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DealerListPage } from './dealer-list';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    DealerListPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(DealerListPage),
  ],
})
export class DealerListPageModule {}
