export class Users {

    user_Id :number;
    username :String;
    password :String;

    constructor(
        user_Id = 0,
        username = '',
        password = ''
    )
    {
    this.user_Id = user_Id;
    this.username = username;
    this.password = password;
    }
}