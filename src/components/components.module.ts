import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { IconListItemComponent } from './icon-list-item/icon-list-item';
import { InputLabelComponent } from './input-label/input-label';
import { ZButtonComponent } from './z-button/z-button';
import { InputFieldComponent } from './input-field/input-field';
import { SliderComponent } from './slider/slider';
import { HorizontalItemSliderComponent } from './horizontal-item-slider/horizontal-item-slider';
import { DetailHeaderComponent } from './detail-header/detail-header';
import { DealerListItemComponent } from './dealer-list-item/dealer-list-item';
// import { HomeComponent } from './home/home';
@NgModule({
	declarations: [IconListItemComponent,
    InputLabelComponent,
    ZButtonComponent,
    InputFieldComponent,
    SliderComponent,
    HorizontalItemSliderComponent,
    DetailHeaderComponent,
    DealerListItemComponent],
	imports: [ IonicModule ],
	exports: [IconListItemComponent,
    InputLabelComponent,
    ZButtonComponent,
    InputFieldComponent,
    SliderComponent,
    HorizontalItemSliderComponent,
    DetailHeaderComponent,
    DealerListItemComponent]
})
export class ComponentsModule {}
