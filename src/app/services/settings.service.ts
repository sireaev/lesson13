import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ISettings } from '../interfaces/settings.interface';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public settings: BehaviorSubject<ISettings|null> = new BehaviorSubject<ISettings|null>(null);
  constructor() { }
}
