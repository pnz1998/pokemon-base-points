import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareModule } from '../share/share.module';
import { HomeComponent } from '../home/home.component';
import { LetterComponent } from '../letter/letter.component';
import { CollectionComponent } from '../collection/collection.component';
import { UserComponent } from '../user/user.component';


@NgModule({
  declarations: [
    HomeComponent,
    LetterComponent,
    CollectionComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ]
})
export class MainPageModule { }
