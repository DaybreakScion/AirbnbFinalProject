import { DataSource } from "./src/infrastructure/Database";
import { UserRepository } from "./src/infrastructure/UserRepository";
import { UserService } from "./src/services/UserService";
import { AuthService } from "./src/services/AuthService";

async function main() {
  const dataSource = DataSource.instance;
  const userRepository = new UserRepository(dataSource);
  const userService = new UserService(userRepository);
  const authService = new AuthService(userRepository);

  await userService.register('david.nadaraia@gmail.com', '123456', 'David', 'Nadaraia');

  const user = await authService.login('david.nadaraia@gmail.com', '123456');
  console.log(user);

  return 0;
}

main()
  .then(process.exit)
  .catch(console.error);
