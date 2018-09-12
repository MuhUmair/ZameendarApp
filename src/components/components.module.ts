import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { IconListItemComponent } from './icon-list-item/icon-list-item';
import { InputLabelComponent } from './input-label/input-label';
import { ZButtonComponent } from './z-button/z-button';
import { InputFieldComponent } from './input-field/input-field';
import { SliderComponent } from './slider/slider';
import { HorizontalItemSliderComponent } from './horizontal-item-slider/horizontal-item-slider';
import { CommunicationItemComponent } from './communication-item/communication-item';
import { RatesItemComponent } from './rates-item/rates-item';
import { DealerListItemComponent } from './dealer-list-item/dealer-list-item';
import { DetailHeaderComponent } from './detail-header/detail-header';
// import { HomeComponent } from './home/home';
@NgModule({
	declarations: [IconListItemComponent,
    InputLabelComponent,
    ZButtonComponent,
    InputFieldComponent,
    SliderComponent,
    HorizontalItemSliderComponent,
    CommunicationItemComponent,
    RatesItemComponent,
    DetailHeaderComponent,
    DealerListItemComponent],
	imports: [ IonicModule ],
	exports: [IconListItemComponent,
    InputLabelComponent,
    ZButtonComponent,
    InputFieldComponent,
    SliderComponent,
    HorizontalItemSliderComponent,
    CommunicationItemComponent,
    RatesItemComponent,
    DetailHeaderComponent,
    DealerListItemComponent]
})
export class ComponentsModule {}
