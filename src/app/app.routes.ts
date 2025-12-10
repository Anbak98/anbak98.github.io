import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Timeline } from './timeline/timeline';
import { About } from './about/about';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: '', component: Home },        // 기본 경로
  { path: 'timeline', component: Timeline },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '', pathMatch: 'full' } // 없는 경로 → 홈
];
