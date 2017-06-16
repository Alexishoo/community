import {AppComponent} from './app.component'

export const routes = [
  {path: 'home', component: AppComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full' }
]
