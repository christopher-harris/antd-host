import { NgModule } from '@angular/core';
import { EngageUiComponent } from './engage-ui.component';
import {AntImportModule} from './ant-import/ant-import.module';



@NgModule({
  declarations: [
    EngageUiComponent
  ],
  imports: [
    AntImportModule
  ],
  exports: [
    EngageUiComponent,
    AntImportModule
  ]
})
export class EngageUiModule { }
