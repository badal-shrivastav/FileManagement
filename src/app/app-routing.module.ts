import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchFileComponent } from './components/search-file/search-file.component';


const routes: Routes = [
  {path:'searchFile' , component:SearchFileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
