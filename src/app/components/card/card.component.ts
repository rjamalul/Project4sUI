import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Goal } from 'src/app/models/Goal';
import { GoalService } from 'src/app/services/goal.service';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  @Input() goalFormData!: Goal;
  @Input() goalListData: Goal[] = [];
  @Output() deleteGoal: EventEmitter<any> = new EventEmitter(); 
  @Output() editGoal: EventEmitter<any> = new EventEmitter(); 
  isCurrentAmountEditable: any = {};

  constructor(private goalService: GoalService) {
    this.goalFormData = new Goal();
  }

  ngOnInit(): void {
    for (var goals of this.goalListData) {
      this.isCurrentAmountEditable[goals.id] = false;
    }
    console.log(this.isCurrentAmountEditable);
  }

  makeEditable(id :any): void {
    for (let key in this.isCurrentAmountEditable) {
      if (key == id) {
        this.isCurrentAmountEditable[key] = true;
      }
    }
  }

  makeNonEditable(id :any): void {
    for (let key in this.isCurrentAmountEditable) {
      if (key == id) {
        this.isCurrentAmountEditable[key] = false;
      }
    }
  }

  saveEdit(goalFormData: Goal): void {
    this.goalService.updateGoal(goalFormData).subscribe(response => { });
    this.makeNonEditable(goalFormData.id);
    this.editGoal.emit(goalFormData);
  }

  delete(id :any) :void {
    id = Number(id);
    this.goalService.deleteGoal(id).subscribe(response => { });
    this.deleteGoal.emit(id);
  }
}
