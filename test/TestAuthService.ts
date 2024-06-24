// test/TestAuthService.ts
import { DataSource } from '../src/infrastructure/Database';
import { UserRepository } from '../src/infrastructure/UserRepository';
import { AuthService, InvalidPasswordException } from '../src/services/AuthService';

const dataSource = DataSource.instance;
const userRepository = new UserRepository(dataSource);
const authService = new AuthService(userRepository);

async function testRegistrationAndLogin() {
  try {
    // Register a new user with a valid alphanumeric password
    const user = await authService.register('test@example.com', 'PASSWORD123', 'Test', 'User');
    console.log('Registration successful:', user);
  } catch (error) {
    console.error('Registration failed:', error.message);
  }

  try {
    // Register another user with a different valid alphanumeric password
    const user = await authService.register('test4@example.com', 'password321', 'Test', 'User');
    console.log('Registration successful:', user);
  } catch (error) {
    console.error('Registration failed:', error.message);
  }

  try {
    // Attempt to register a user with an invalid password (only letters)
    const user = await authService.register('test2@example.com', 'password', 'Test', 'User');
    console.log('Registration successful:', user);
  } catch (error) {
    if (error instanceof InvalidPasswordException) {
      console.error('Registration failed: Invalid password -', error.message);
    } else {
      console.error('Registration failed:', error.message);
    }
  }

  try {
    // Attempt to register a user with an invalid password (only numbers)
    const user = await authService.register('test3@example.com', '123456', 'Test', 'User');
    console.log('Registration successful:', user);
  } catch (error) {
    if (error instanceof InvalidPasswordException) {
      console.error('Registration failed: Invalid password -', error.message);
    } else {
      console.error('Registration failed:', error.message);
    }
  }

  try {
    // Try logging in with the correct credentials for the first user
    const loggedInUser = await authService.login('test@example.com', 'PASSWORD123');
    console.log('Login successful:', loggedInUser);
  } catch (error) {
    console.error('Login failed:', error.message);
  }

  try {
    // Try logging in with the correct credentials for the second user
    const loggedInUser = await authService.login('test4@example.com', 'password321');
    console.log('Login successful:', loggedInUser);
  } catch (error) {
    console.error('Login failed:', error.message);
  }

  try {
    // Try logging in with incorrect credentials
    const loggedInUser = await authService.login('test@example.com', 'wrongpassword');
    console.log('Login successful:', loggedInUser);
  } catch (error) {
    console.error('Login failed:', error.message);
  }
}

testRegistrationAndLogin();
