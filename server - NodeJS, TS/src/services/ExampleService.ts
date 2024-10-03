import { FailedToGetCountryInfo } from '../config/errors/classes/SystemErrors';
import AxiosService from './AxiosService';

class ExampleService {
  async get() {
    try {
    } catch (err) {
      console.log('Failed to get');

      setTimeout(() => {}, 1000);
    }
  }
}

export default new ExampleService();
