import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { QuizService } from "../shared/quiz.service";
import { Router } from "@angular/router";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: "app-result",
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: "./result.component.html",
  styleUrls: ["./result.component.css"]
})
export class ResultComponent implements OnInit {
  public isResultSubmitted: boolean;

  constructor(public quizService: QuizService, private router: Router) {
    this.isResultSubmitted = false;
  }

  ngOnInit() {
    if (
      parseInt(localStorage.getItem("qnProgress") || '0') ==
      this.quizService.qns.length
    ) {
      this.quizService.seconds = parseInt(localStorage.getItem("seconds") || '0');
      this.quizService.qnProgress = parseInt(
        localStorage.getItem("qnProgress") || '0'
      );
      this.quizService.qns = JSON.parse(localStorage.getItem("qns") || '[]');

      this.quizService.correctAnswerCount = 0;
      this.quizService.qns.forEach(eachQuestion => {
        if (eachQuestion.choice == eachQuestion.answer) {
          this.quizService.correctAnswerCount++;
        }
        eachQuestion.correct = eachQuestion.answer;
      });

    } else {
      this.router.navigate(["/quiz"]);
    }
  }

  OnSubmit() {
    this.quizService.submitScore().subscribe(() => {
      this.isResultSubmitted = true;
    });
  }

  OnDashboard() {
    this.router.navigate(["/dashboard"]);
  }

  restart() {
    this.isResultSubmitted = false;
    localStorage.setItem("qnProgress", "0");
    localStorage.setItem("qns", "");
    localStorage.setItem("seconds", "0");
    this.router.navigate(["/quiz"]);
  }
}
