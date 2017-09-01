import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PscShareModule } from '../psc_shared/psc_shared.module';
import { FdnameComponent } from './fdname.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FdnameComponent]
})
export class SettingModule { }
