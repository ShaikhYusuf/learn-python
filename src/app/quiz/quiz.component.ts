import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { QuizService } from "../shared/quiz.service";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: "app-quiz",
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"]
})
export class QuizComponent implements OnInit {
  public progressBarPercentage!: number;
  category!: string;

  constructor(private router: Router,
    private route: ActivatedRoute, 
    public quizService: QuizService) {
      
    // Access the route parameter
    this.category = this.route.snapshot.paramMap.get('category')!;
    console.log('Category:', this.category);
    localStorage.setItem("seconds", '0');
    localStorage.setItem("qnProgress", '0');
  }

  ngOnInit() {

    if (parseInt(localStorage.getItem("seconds") || '0') > 0) {
      this.quizService.seconds = parseInt(localStorage.getItem("seconds") || '0');
      this.quizService.qnProgress = parseInt(
        localStorage.getItem("qnProgress") || '0'
      );

      this.quizService.qns = JSON.parse(localStorage.getItem("qns") || '[]');
      this.progressBarPercentage = 1;

      if (this.quizService.qns && 
        this.quizService.qnProgress == this.quizService.qns.length) {
        this.router.navigate(["/result"]);
      } else {
        this.startTimer();
      };

    } else {

      this.quizService.seconds = 0;
      this.quizService.qnProgress = 0;
      this.quizService.getQuestions(this.category).subscribe((data: any) => {
        this.quizService.qns = data;
        this.startTimer();
      });
    }
  }

  startTimer() {
    this.quizService.timer = setInterval(() => {
      this.quizService.seconds++;
      localStorage.setItem("seconds", this.quizService.seconds.toString());
    }, 1000);
  }

  Answer(qID: number, choice: number) {
    this.quizService.qns[this.quizService.qnProgress].choice = choice;
    localStorage.setItem("qns", JSON.stringify(this.quizService.qns));
    this.quizService.qnProgress++;
    this.progressBarPercentage =
      ((this.quizService.qnProgress + 1) / this.quizService.qns.length) * 100;
    localStorage.setItem("qnProgress", this.quizService.qnProgress.toString());

    if (this.quizService.qnProgress == this.quizService.qns.length) {
      clearInterval(this.quizService.timer);
      this.router.navigate(["/result"]);
    }
  }
}
