import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Scores } from './scores';

@Component({
  selector: 'app-scorepad',
  templateUrl: './scorepad.component.html',
  styleUrls: ['./scorepad.component.css']
})
export class ScorepadComponent implements OnInit, OnChanges {
  @Input() prop!: number;

  constructor() { }

  model = new Scores();

  get diagnostic() { return JSON.stringify(this.model); }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.model.blue.calculate();
    this.model.red.calculate();
  }
}
