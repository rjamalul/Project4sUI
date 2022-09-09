import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
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
  enterForm! :FormGroup;
  goalFormData: Goal;

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
    this.goalService.createGoal(goal).subscribe(response => {      
    });
    this.addGoalEvent.emit(goal);
  }
}
