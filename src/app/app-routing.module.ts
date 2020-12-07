import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadexcelComponent } from './Components/readexcel/readexcel.component';


const routes: Routes = [

  {path:'',component:ReadexcelComponent},
  {path:'reader',component:ReadexcelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
