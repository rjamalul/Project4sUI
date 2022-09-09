import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Goal } from 'src/app/models/Goal';
import { GoalService } from 'src/app/services/goal.service';
import { interval, fromEvent } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-enter-modal',
  templateUrl: './enter-modal.component.html',
  styleUrls: ['./enter-modal.component.css']
})

export class EnterModalComponent implements OnInit {
  @Output() addGoalEvent: EventEmitter<any> = new EventEmitter(); 
  @Output() getGoalsAfterAddingEvent: EventEmitter<any> = new EventEmitter(); 

  @Input() goalListData: Goal[] = [];
  
  enterForm! :FormGroup;
  goalFormData: Goal;
  goalsList: Goal[] = [];

  constructor(
    private goalService :GoalService,
    private formBuilder: FormBuilder
    // private dialogRef: MatDialogRef<EnterModalComponent>,
    // @Inject(MAT_DIALOG_DATA) public editData: Goal,
    // private dialog :MatDialog
  ) {
    this.goalFormData = new Goal();
  }

  ngOnInit(): void {
    this.enterForm = this.formBuilder.group({
      idControl: ['',Validators.required],
      goalNameControl: ['',Validators.required], 
      descriptionTextControl: ['',Validators.required],
      targetAmountControl: ['',Validators.required],
      currentAmountControl: ['',Validators.required],
      targetDateControl: ['',Validators.required],
      pictureControl: ['',Validators.required],
      userIdControl: ['',Validators.required]
    });
  }

  submit(goal :Goal) :void {    
    var output = this.goalService.createGoal(goal).subscribe(response => { 
      if (response.length > 0) {
        // this.goalsList = response;
        this.getGoalsAfterAddingEvent.emit(response);
        this.addGoalEvent.emit(goal);
      }
    });
  }

  // setLatestID(goal :Goal): any {
  //   let greatestID = -1;
  //   for(var goal of this.goalListData) {
  //     if (greatestID < goal.id) {
  //       greatestID = goal.id
  //     }
  //   }
  //   goal.id = greatestID++;
  // }
}
