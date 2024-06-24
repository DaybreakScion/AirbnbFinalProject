import bcrypt from 'bcrypt';

enum UserRole {
  customer,
  manager
}

export class User {
  public id: number;
  public role: UserRole;
  public email: string;
  public password: string;
  public firstName: string;
  public lastName: string;
  public hasPet: boolean;

  constructor(rawData?: Partial<User>) {
    Object.assign(this, rawData);
  }

  validate() {
    this.email = this.email.trim().toLowerCase();
  }

  async setPassword(plainPassword: string): Promise<void> {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(plainPassword, salt);
  }

  async comparePassword(plainPassword: string): Promise<boolean> {
    return bcrypt.compare(plainPassword, this.password);
  }
}
