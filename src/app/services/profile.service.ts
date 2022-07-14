import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Profile } from '../interfaces/profile.interface';
import { IResponse } from '../interfaces/response.interface';
import { ICrud } from '../interfaces/service.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService implements ICrud<Profile> {

  constructor() { }

  create(): Observable<IResponse<Profile>> {
    return of()
  };

  get(id: number): Observable<IResponse<Profile>> {
    return of();
  }

  update(data: Profile): Observable<IResponse<Profile>> {
    return of();
  }

  delete(id: number): Observable<IResponse<Profile>> {
    return of();
  }

  list(data: Profile): Observable<IResponse<Profile>> {
    return of();
  }
}
