import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private ser: DataService) { }
 questions = this.ser.questions();

 ans_array: boolean[] = [];
  title = 'General Knowledge Quiz';

  //  clearForm() {
  //   (<HTMLFormElement>document.getElementById("reset")).reset;
  //  }

   refresh(): void {
    window.location.reload();
  } 

  quiz_score() {

    var count = 0;

    document.getElementById("score").className = ``;

    for (var i  = 0; i < this.questions.questions().length; i++) {
      if (this.ans_array[i] == true) {
        count++;
      }
    }

    if (count/this.questions.questions().length >= 0.5) {

      document.getElementById("score").className = "alert alert-success";
      document.getElementById("score").innerHTML = `Your Score is ` + count.toString() + ` out of ` + this.questions.questions().length.toString() + `, which is greater 
      than or equal to 50%. Thus, you have passed the quiz.`;

    }

    else {
      document.getElementById("score").className = "alert alert-danger";
      document.getElementById("score").innerHTML = `Your Score is ` + count.toString() + ` out of ` + this.questions.questions().length.toString() + `, which is less 
      than 50%. Thus, you have failed the quiz. You will have to retake the quiz in the future again.`;
    }

    
    
  }
}

