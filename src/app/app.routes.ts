import {Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

const URL = 'http://localhost:4200/remoteEntry.js';

export const APP_ROUTES: Routes = [
  // {
  //   path: '',
  //   component: AppComponent,
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'welcome',
  //   loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)
  // }
  {
    path: '**',
    component: NotFoundComponent
  }
];
