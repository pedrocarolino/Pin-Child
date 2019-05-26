import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShareChildPage } from './share-child.page';
import { SharedModule } from "../../../shared/components/shared.module";

const routes: Routes = [
  {
    path: '',
    component: ShareChildPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [ShareChildPage]
})
export class ShareChildPageModule {}
