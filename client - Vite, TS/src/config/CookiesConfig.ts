import { CookieSetOptions } from 'universal-cookie';
import ENVIRONMENT from './Environment';

const expiresDate = new Date();
expiresDate.setTime(expiresDate.getTime() + 5 * 24 * 60 * 60 * 1000); // 5 days in milliseconds

export const JWTCookie: { key: string; config: CookieSetOptions } = {
  key: 'accessToken',
  config: {
    expires: expiresDate,
    secure: ENVIRONMENT.VITE_APP_MODE === 'PRODUCTION',
    domain: ENVIRONMENT.VITE_APP_DOMAIN,
    httpOnly: true,
  },
};
