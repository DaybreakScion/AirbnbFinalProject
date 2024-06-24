import { User } from "../core/domain/User";
import { IUserRepository } from "../interfaces";

export class LoginFailedException extends Error {
  constructor() {
    super('Login failed');
  }
}

export class InvalidPasswordException extends Error {
  constructor() {
    super('Password must contain both letters and numbers');
  }
}

export class AuthService {
  constructor(private readonly userRepository: IUserRepository) {}

  async register(email: string, password: string, firstName: string, lastName: string): Promise<User> {
    if (!/^(?=.*[a-zA-Z])(?=.*\d)/.test(password)) {
      throw new InvalidPasswordException();
    }

    const user = new User({ email, firstName, lastName });
    user.validate();
    await user.setPassword(password); // Hash the password
    return this.userRepository.save(user);
  }

  async login(email: string, password: string): Promise<User> {
    const user = await this.userRepository.fetchByEmail(email);
    if (!user || !(await user.comparePassword(password))) {
      throw new LoginFailedException();
    }
    return user;
  }
}
