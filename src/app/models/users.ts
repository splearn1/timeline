export class User {

  constructor(

    public first_name: string,
    public last_name: string,
    public email: string,
    public username: string,
    public id?: number,
    public password?: string,
    public password_confirmation?: string)
     {}
}
