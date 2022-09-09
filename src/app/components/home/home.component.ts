import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Goal } from 'src/app/models/Goal';
import { GoalService } from 'src/app/services/goal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  goalsList :Goal[] = [];
  width : string = '';
  //date = new FormControl(moment());

  constructor(
    private formBuilder: FormBuilder, 
    private goalService: GoalService,
    private dialog :MatDialog
  ) { }

  ngOnInit(): void {
    this.updateFindAll();
  }

  updateFindAll() {
    this.goalService.getGoals().subscribe(goals => { this.goalsList = goals as Goal[]});    
  }
}
