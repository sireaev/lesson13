import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { environment } from '../../environments/environment';
import { TOKEN_KEY } from '../constants/token.constant';
import { Profile } from '../interfaces/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(): void {
    this.http.get<Profile>(`${environment.API_URL}/login`).subscribe((response: Profile) => {
      if (response.token) localStorage.setItem(TOKEN_KEY, response.token);
    })
  }

  checkToken(): Observable<{token: string}> {
    return this.http.get<{token: string}>(`${environment.API_URL}/token`);
  }
}
