import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';

import { SharedModule } from 'src/app/shared/shared.module';
import { CaptureTabComponent } from './capture-tab/capture-tab.component';
import { ExploreTabComponent } from './explore-tab/explore-tab.component';
import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule,
  ],
  declarations: [HomePage, CaptureTabComponent, ExploreTabComponent],
})
export class HomePageModule {}
