import jwt from 'jsonwebtoken';
import { TjwtPayLoad } from './auth.interface';

export const createToken = (
  jwtPayLoad: TjwtPayLoad,
  secret: string,
  expiresIn: string,
) => {
  return jwt.sign(jwtPayLoad, secret, { expiresIn });
};

export function isPhoneNumber(input: string): boolean {

  const phoneRegex = /^\+?(\d{1,4})?[-.\s]?\(?(\d{1,})\)?[-.\s]?(\d{1,})[-.\s]?(\d{1,})$/;
  return phoneRegex.test(input);
}


export function isEmailAddress(input: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(input);
}
