import {NgModule} from '@angular/core';
import {WelcomeRoutingModule} from './welcome-routing.module';
import {WelcomeComponent} from './welcome.component';
import {EngageUiModule} from '../../../../projects/engage-ui/src/lib/engage-ui.module';

@NgModule({
  imports: [
    WelcomeRoutingModule,
    EngageUiModule
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule {
}
