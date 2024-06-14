import { User } from "../core/domain/User";
import { IUserRepository } from "../interfaces";

export class UserService {

  constructor(
    private readonly userRepository: IUserRepository,
  ) {}

  async register(email: string, password: string, firstName: string, lastName: string): Promise<User> {
    const user = new User({ email, password, firstName, lastName });
    user.validate();
    return this.userRepository.save(user);
  }
}
