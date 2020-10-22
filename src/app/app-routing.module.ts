import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { Questions1Component } from './questions1/questions1.component';

const routes: Routes = [
  {path: 'questions', component: QuestionsComponent},
  {path: 'questions1', component: Questions1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
