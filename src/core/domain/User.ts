export class User {

  public id: number;

  public email: string;

  public password: string;

  public firstName: string;

  public lastName: string;

  constructor(rawData?: Partial<User>) {
    Object.assign(this, rawData);
  }

  validate() {
    this.email = this.email.trim().toLowerCase();
  }
}
