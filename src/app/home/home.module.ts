import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

import {CoreModule} from '@app/core';
import {SharedModule} from '@app/shared';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {GearbestAPIService} from '@app/home/gearbestAPI.service';
import {FormControl, FormsModule} from '@angular/forms';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    HomeRoutingModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    GearbestAPIService
  ]
})

export class HomeModule {
}
