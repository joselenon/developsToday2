import { Request, Response, NextFunction } from 'express';
import { responseBody } from '../helpers/responseHelpers';
import AxiosService from '@/services/AxiosService';

class CountriesController {
  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const allCountries = await AxiosService({ url: 'https://restcountries.com/v3.1/all' });
      if (!allCountries.data) throw new Error('error');

      res.status(200).json(responseBody({ success: true, message: 'GET_MSG', data: allCountries.data }));
    } catch (err) {
      next(err);
    }
  }

  async post(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).json(responseBody({ success: true, message: 'GET_MSG' }));
    } catch (err) {
      next(err);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).json(responseBody({ success: true, message: 'GET_MSG' }));
    } catch (err) {
      next(err);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).json(responseBody({ success: true, message: 'GET_MSG' }));
    } catch (err) {
      next(err);
    }
  }
}

export default new CountriesController();
