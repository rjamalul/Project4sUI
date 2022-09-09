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
  @Output() updateFindAll: EventEmitter<any> = new EventEmitter(); 
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

  getGoals() {
    this.updateFindAll.emit();    
  }

  makeEditable(id :any): void {
    for (let key in this.isCurrentAmountEditable) {
      if (key == id) {
        this.isCurrentAmountEditable[key] = true;
      }
    }

    console.log(this.isCurrentAmountEditable);
  }

  saveEdit(goalFormData: Goal): void {
    this.goalService.updateGoal(goalFormData).subscribe(response => { });
    this.getGoals();
  }

  delete(id :any) :void {
    id = Number(id);
    this.goalService.deleteGoal(id).subscribe(response => { });
  }
}
