// test/TestAuthService.ts
import { DataSource } from '../src/infrastructure/Database';
import { UserRepository } from '../src/infrastructure/UserRepository';
import { AuthService } from '../src/services/AuthService';

const dataSource = DataSource.instance;
const userRepository = new UserRepository(dataSource);
const authService = new AuthService(userRepository);

async function testRegistrationAndLogin() {
  // Register a new user
  const user = await authService.register('test@example.com', 'password123', 'Test', 'User');
  console.log('Registration successful:', user);

  // Try logging in with the correct credentials
  try {
    const loggedInUser = await authService.login('test@example.com', 'password123');
    console.log('Login successful:', loggedInUser);
  } catch (error) {
    console.error('Login failed:', error.message);
  }

  // Try logging in with the incorrect credentials
  try {
    const loggedInUser = await authService.login('test@example.com', 'wrongpassword');
    console.log('Login successful:', loggedInUser);
  } catch (error) {
    console.error('Login failed:', error.message);
  }
}

testRegistrationAndLogin();
