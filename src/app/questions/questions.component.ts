import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  @Input() out: any;
  value: boolean;
  value1: boolean;
  details: any[];
  disabled: any; //disable initialize
  constructor(private ser: DataService) { }
  quests = this.ser.questions();

  ngOnInit(): void {
    this.details = this.ser.questions();
  }

  validate(opt,out,ans){
    this.value = false;
    this.value1 = false;
    if(opt == out.answer){
      this.value = true;
    }else{
      this.value1 = true;
    }
    this.disabled = "disabled"; //called disabled
  }

   /* clearForm() {
    (<HTMLFormElement>document.getElementById("reset")).reset;
   }

   refresh(): void {
    window.location.reload();
  } */

}

