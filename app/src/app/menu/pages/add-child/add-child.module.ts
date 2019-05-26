import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
// import { BrMaskerModule } from 'br-mask';

import { AddChildPage } from './add-child.page';
import { SharedModule } from "../../../shared/components/shared.module";

const routes: Routes = [
  {
    path: '',
    component: AddChildPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [AddChildPage]
})
export class AddChildPageModule {}
