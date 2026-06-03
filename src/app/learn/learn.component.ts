import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { QuizService } from "../shared/quiz.service";
import { NavbarComponent } from "../navbar/navbar.component";

interface Question {
  Id: number;
  question: string;
  optionList: string[];
  answer: number;
}

@Component({
  selector: "app-learn",
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: "./learn.component.html",
  styleUrls: ["./learn.component.css"]
})
export class LearnComponent implements OnInit {
  questionList!: Question[];
  category!: string;

  constructor(private router: Router,
    private route: ActivatedRoute, 
    public quizService: QuizService) {

      this.category = this.route.snapshot.paramMap.get('category')!;
  }

  ngOnInit(): void {
    this.quizService.getCompleteQuestionList(this.category).subscribe((data: any) => {
      this.questionList = data;
    });
  }
}
