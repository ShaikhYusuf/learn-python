import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { QuizService } from "../../shared/quiz.service";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "home-quiz",
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  
  subjectList = [
    { title: 'Python' }
  ];

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  learn (index: number) {
    switch(index) {
      case 0: this.router.navigate(['/learn/python']); break;
    }
  }

  quiz(index: number) {
    switch(index) {
      case 0: this.router.navigate(['/subject/python']); break;
    }
    
  }
}
