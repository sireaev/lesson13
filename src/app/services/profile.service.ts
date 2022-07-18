import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Profile } from '../interfaces/profile.interface';
import { IResponse } from '../interfaces/response.interface';
import { ICrud } from '../interfaces/service.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService implements ICrud<Profile> {
  private route: string = 'profiles';
  constructor(private http: HttpClient) { }

  create(): Observable<IResponse<Profile>> {
    return of()
  };

  get(id: number): Observable<IResponse<Profile>> {
    return this.http.get<IResponse<Profile>>(`${environment.API_URL}/${this.route}/${id}`);
  }

  update(data: Profile): Observable<IResponse<Profile>> {
    return of();
  }

  delete(id: number): Observable<IResponse<Profile>> {
    return of();
  }

  list(data: Profile): Observable<IResponse<Profile>> {
    return this.http.get<IResponse<Profile>>(`${environment.API_URL}/${this.route}`);
  }
}
