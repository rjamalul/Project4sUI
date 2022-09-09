import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { concat, Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { Goal } from "../models/Goal";



@Injectable({
    providedIn: 'root'
    
})
export class GoalService {
    goalUrl = '/goals';

    constructor(private http: HttpClient) { }

    getGoals():Observable<Goal[]> {
        return this.http.get<Goal[]>(`${environment.baseUrl}${this.goalUrl}/getGoals`);
    } 

    // createGoal(goal: Goal) :Observable<Goal[]> {
    //     let dummyURL=`${environment.baseUrl}${this.goalUrl}/addGoal`;
    //     console.log(dummyURL);
    //     return this.http.post<Goal[]>(`${environment.baseUrl}${this.goalUrl}/addGoal`, goal);
    // } 

    createGoal(goal: Goal) :Observable<Goal[]> {
        let dummyURL=`${environment.baseUrl}${this.goalUrl}/addGoal`;
        const createGoal$ = this.http.post<Goal[]>(`${environment.baseUrl}${this.goalUrl}/addGoal`, goal);
        const getGoals$ = this.getGoals();
        const combined$ = concat(
            createGoal$,
            getGoals$
        );
        return combined$;
    } 

    public updateGoal(goal: Goal) :Observable<Goal[]> {
        return this.http.post<Goal[]>(`${environment.baseUrl}${this.goalUrl}/updateGoal`, goal);
    }

    deleteGoal(id: number) :Observable<boolean> {
        return this.http.delete<boolean>(`${environment.baseUrl}${this.goalUrl}/${id}`);
    }
}