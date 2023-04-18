import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { HomePageComponent } from './home-page.component';
import { ShareModule } from '../share/share.module';
import { PointsCalculatorComponent } from '../points-calculator/points-calculator.component';


@NgModule({
  declarations: [
    HomePageComponent,
    ToolbarComponent,
    PointsCalculatorComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    ShareModule
  ]
})
export class HomePageModule { }
