// Import the built-in 'crypto' module using the 'import' syntax for ES modules
import { randomBytes } from 'crypto';

// Generate a secure random 32-byte key and convert it to a hexadecimal string
const jwtSecret = randomBytes(32).toString('hex');

// Print the generated JWT secret to the console
console.log('Generated JWT Secret:', jwtSecret);