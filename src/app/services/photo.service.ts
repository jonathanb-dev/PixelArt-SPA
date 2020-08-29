import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

// Interfaces
import { IPhoto } from '../interfaces/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor(private http: HttpClient) { }

  getPhotos() {
    return this.http.get<IPhoto[]>(environment.apiEndpointUrl + 'photos');
  }
}
