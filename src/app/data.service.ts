import { Injectable } from '@angular/core';
import { detail } from './questions';
import { QuestionsComponent } from './questions/questions.component';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {  }
  questions(){
    return detail;
  }

  ans_array(){
    return this.ans_array;
  }
}
