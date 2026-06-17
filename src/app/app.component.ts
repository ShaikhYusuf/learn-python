import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { QuizService } from './shared/quiz.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'python';
  isSidebarActive = false;
  selectedLessonId: string = 'home';
  siteTitle = 'Python Programming Guide';

  menuItems = [
    { id: 'home', name: 'Home / Subject Select', url: 'home' },
    { id: 'python', name: 'Python Basics', url: 'learn/python', quiz: 'subject/python' }
  ];

  constructor(private router: Router, public quizService: QuizService) {}

  isLoggedIn(): boolean {
    return localStorage.getItem('participant') != null;
  }

  getUserName(): string {
    return this.quizService.getParticipantName();
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/register']);
  }

  toggleSidebar(): void {
    this.isSidebarActive = !this.isSidebarActive;
  }

  selectLesson(id: string, url: string): void {
    this.selectedLessonId = id;
    this.router.navigate([url]);
    if (window.innerWidth <= 992) {
      this.isSidebarActive = false;
    }
  }

  navigate(url: string): void {
    this.router.navigate([url]);
    if (window.innerWidth <= 992) {
      this.isSidebarActive = false;
    }
  }
}
