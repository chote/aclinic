import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PscShareModule} from '../app/../psc_shared/psc_shared.module';
import { LabComponent } from './lab.component';

@NgModule({
  imports: [
    CommonModule,PscShareModule
  ],
  declarations: [LabComponent],
  exports:[LabComponent]
})
export class LabModule { }
