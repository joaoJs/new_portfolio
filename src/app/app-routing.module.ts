import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ArtistComponent } from './pages/artist/artist.component';
import { PianistComponent} from './pages/pianist/pianist.component';

const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'artist', component: ArtistComponent},
  {path: 'pianist', component: PianistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
