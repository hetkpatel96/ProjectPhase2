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

  title = 'General Knowledge Quiz';

  clearForm() {
    (<HTMLFormElement>document.getElementById("reset")).reset;
   }

   refresh(): void {
    window.location.reload();
  } 
}

