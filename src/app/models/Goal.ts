export class Goal {

    id :number;
    goalName :String;
    descriptionText :String;
    targetAmount :number;
    currentAmount :number;
    targetDate :String;
    picture :String;
    userId :number;

    constructor(
        id = 0,
        goalName = '',
        descriptionText = '',
        targetAmount = 0,
        currentAmount = 0,
        targetDate = '',
        picture = '',
        userId = 0

    ) {
        this.id = id;
        this.goalName = goalName;
        this.descriptionText = descriptionText
        this.targetAmount = targetAmount;
        this.currentAmount = currentAmount;
        this.targetDate = targetDate;
        this.picture = picture;
        this.userId = userId;
    }

}