import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LearnComponent } from './learn/learn.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'learn/:category', component: LearnComponent },
  { path: 'subject/:category', component: QuizComponent },
  { path: 'result', component: ResultComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
