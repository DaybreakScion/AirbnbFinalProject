export class User {

  public id: number;

  public email: string;

  public password: string;

  public firstName: string;

  public lastName: string;

  constructor(eawData?: Partial<User>) {
    Object.assign(this, eawData);
  }

  validate() {
    this.email = this.email.trim().toLowerCase();
  }
}
