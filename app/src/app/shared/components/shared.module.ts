import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListChildsComponent } from "./list-childs/list-childs.component";
import { SearchComponent } from './search/search.component';
import { IonicModule } from '@ionic/angular';
// import { AgeByBirthdatePipe } from './pipes/age-by-birthdate/age-by-birthdate.pipe';
// import { FormatName2Pipe } from './pipes/format-name-2/format-name-2.pipe';
// import { ConsultTypeBadgeColorPipe } from './pipes/consultTypeBadgeColor/consult-type-badge-color.pipe';
// import { DatepickerChipComponent } from './components/datepicker-chip/datepicker-chip.component';

@NgModule({
  declarations: [
    ListChildsComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    ListChildsComponent,
    SearchComponent
  ]
})
export class SharedModule { }
