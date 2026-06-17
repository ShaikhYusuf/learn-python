import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { QuizService } from "../../shared/quiz.service";
import { MatIconModule } from "@angular/material/icon";

interface Question {
  Id: number;
  question: string;
  optionList: string[];
  answer: number;
  codeBlock?: string;
  ImageName?: string;
}

@Component({
  selector: "app-learn",
  standalone: true,
  imports: [CommonModule, MatIconModule],
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
