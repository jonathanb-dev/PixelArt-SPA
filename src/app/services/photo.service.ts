import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';

// Interfaces
import { IPhoto } from '../interfaces/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor(private http: HttpClient) { }

  getPhotos(): Observable<IPhoto[]> {
    return this.http.get<IPhoto[]>(environment.apiEndpointUrl + 'photos');
  }

  uploadPhoto(formData: FormData): Observable<HttpEvent<IPhoto>> {
    return this.http.post<IPhoto>(environment.apiEndpointUrl + 'photos', formData, {
      reportProgress: true,
      observe: 'events'
    });
  }
}
