import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { IconListItemComponent } from './icon-list-item/icon-list-item';
import { InputLabelComponent } from './input-label/input-label';
import { ZButtonComponent } from './z-button/z-button';
import { InputFieldComponent } from './input-field/input-field';
import { SliderComponent } from './slider/slider';
import { HorizontalItemSliderComponent } from './horizontal-item-slider/horizontal-item-slider';
import { HomeComponent } from './home/home';
import { DetailHeaderComponent } from './detail-header/detail-header';
import { HomeComponent } from './home/home';
@NgModule({
	declarations: [IconListItemComponent,
    InputLabelComponent,
    ZButtonComponent,
    InputFieldComponent,
    SliderComponent,
    HorizontalItemSliderComponent,
    HomeComponent],
	imports: [ IonicModule ],
	exports: [IconListItemComponent,
    InputLabelComponent,
    ZButtonComponent,
    InputFieldComponent,
    SliderComponent,
    HorizontalItemSliderComponent,
    HomeComponent,
    DetailHeaderComponent]
})
export class ComponentsModule {}
