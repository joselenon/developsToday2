// Control who's allowed to make requests on this application
import cors from 'cors';

import URLS from '../config/constants/URLS';

export default function corsMiddleware() {
  return cors({
    origin: '*',
    credentials: URLS.MAIN_URLS.CLIENT_FULL_URL === 'localhost' ? false : true,
  });
}
