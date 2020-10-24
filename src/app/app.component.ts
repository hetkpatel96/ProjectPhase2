import { Component } from '@angular/core';
import { DataService } from './data.service';
import { QuestionsComponent } from './questions/questions.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private ser: DataService) { }
 questions = this.ser.questions();
 ans = this.ser.ans_array();

  title = 'Java Quiz';

  //  clearForm() {
  //   (<HTMLFormElement>document.getElementById("reset")).reset;
  //  }

   refresh(): void {
    window.location.reload();
  } 

  quiz_score() {

    var count = 0;

    document.getElementById("score").className = ``;

    for (var i  = 0; i < this.questions.length; i++) {
      if (this.ans[i] == true) {
        count++;
      }
    }

    if (count/this.questions.length >= 0.5) {

      document.getElementById("score").className = "alert alert-success";
      document.getElementById("score").innerHTML = `You have passed the quiz.`;

    }

    else {
      document.getElementById("score").className = "alert alert-danger";
      document.getElementById("score").innerHTML = `You have failed the quiz. Please retake the Quiz.`;
    }
  }
}

