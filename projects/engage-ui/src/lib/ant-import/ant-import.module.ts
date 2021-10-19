import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzTypographyModule} from 'ng-zorro-antd/typography';
import {NzPageHeaderModule} from 'ng-zorro-antd/page-header';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzStatisticModule} from 'ng-zorro-antd/statistic';
import {NzPipesModule} from 'ng-zorro-antd/pipes';
import {NzSpaceModule} from 'ng-zorro-antd/space';

const antModules = [
  NzLayoutModule,
  NzMenuModule,
  NzButtonModule,
  NzTypographyModule,
  NzPageHeaderModule,
  NzDropDownModule,
  NzCardModule,
  NzGridModule,
  NzStatisticModule,
  NzPipesModule,
  NzSpaceModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...antModules
  ],
  exports: [
    ...antModules
  ]
})
export class AntImportModule {
}
