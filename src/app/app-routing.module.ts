import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { SearchMusicComponent } from './search-music/search-music.component';

const routes: Routes = [
  { path: '', redirectTo: '/top5', pathMatch: 'full'},
  {path: 'top5', component: MainPageComponent},
  {path: 'search', component: SearchMusicComponent},
  { path: '**', redirectTo: '/top5'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
