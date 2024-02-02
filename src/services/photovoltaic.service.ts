import { HttpClient } from '../configs/http';
import { HttpResponse, Request } from '../types/http-request';
import { PhotovoltaicData } from '../types/photovoltaic-component-data';

export class PhotoVoltaicService {
   constructor(private readonly httpClient: HttpClient) {}

   async loadPhotovoltaicData(): Promise<HttpResponse> {
      const result = await this.httpClient.get<PhotovoltaicData>(
         '/component',
         {}
      );
      return {
         data: result.data
      };
   }

   async createPhotovoltaic(config: Request): Promise<HttpResponse> {
      const result = await this.httpClient.post<PhotovoltaicData>(
         '/component',
         config
      );
      return {
         data: result.data
      };
   }

   async deletePhotovoltaic(id: number): Promise<HttpResponse> {
      const result = await this.httpClient.delete<PhotovoltaicData>(
         `/component/${id}`,
         {}
      );
      return {
         data: result.data
      };
   }

   async editPhotovoltaic(
      id: number,
      config: Request
   ): Promise<HttpResponse> {
      const result = await this.httpClient.put<PhotovoltaicData>(
         `/component/${id}`,
         config
      );
      return {
         data: result.data
      };
   }
}
