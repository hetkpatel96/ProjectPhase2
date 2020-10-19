import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  @Input() out: any;
  details: any[];
  constructor(private ser: DataService) { }

  ngOnInit(): void {
    this.details = this.ser.questions();
  }

}

