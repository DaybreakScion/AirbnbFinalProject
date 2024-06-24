// src/infrastructure/UserRepository.ts
import { User } from "../core/domain/User";
import { IUserRepository } from "../interfaces";
import { DataSource } from "./Database";

export class UserRepository implements IUserRepository {

  constructor(
    private readonly dataSource: DataSource,
  ) {}

  save(user: User): Promise<User> {
    return this.dataSource.users.save(user);
  }

  fetchById(id: number): Promise<User> {
    return this.dataSource.users.getById(id);
  }

  fetchByEmail(email: string): Promise<User> {
    return this.dataSource.users.findOne((user: any) => user.email === email);
  }
}
