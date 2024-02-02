import { PhotoVoltaicService } from '@/services/photovoltaic.service';
import { HttpClient } from '../http';

export const makePhotoVoltaicService = (): PhotoVoltaicService => {
   const httpClient = new HttpClient();
   return new PhotoVoltaicService(httpClient);
};
