import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MusicComponent} from "./music/music.component";

const routes: Routes = [
  {path: 'music', component: MusicComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
