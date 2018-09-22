import {ProductURLGB} from './productURLGB.interface';
import {Injectable} from '@angular/core';


import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const routes = {
  generateLink: () => `/actions/create-links`
};

export interface GenerateLinkContext {
  // The quote's category: 'dev', 'explicit'...
  category: string;
}


@Injectable()
export class GearbestAPIService {

  constructor(private httpClient: HttpClient) {
  }


  getGenerateURL(urls: [string], email: string): Observable<Array<ProductURLGB>> {
    return this.httpClient.post<ProductURLGB[]>(routes.generateLink(), {urls, email});
  }


}
