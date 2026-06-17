import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { QuizService } from '../../shared/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  constructor(private quizService : QuizService, private route : Router) { }

  ngOnInit() {
  }

  OnSubmit(name: string, email: string){
    this.quizService.insertParticipant(name, email).subscribe(
      (data : any) => {
        localStorage.clear();
        localStorage.setItem('participant', JSON.stringify(data));
        this.route.navigate(['/home']);
      }
    );
  }

}
