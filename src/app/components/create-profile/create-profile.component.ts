import { Component, OnInit } from '@angular/core';
import { Profile } from '../../interfaces/profile.interface';

/**
 * Template drive forms example
 */

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss']
})
export class CreateProfileComponent implements OnInit {
  public profile: Profile = {
    name: '',
    surname: '',
    age: null,
    password: '',
    isActivated: null,
    settings: {
      isDarkTheme: false
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

  createProfile(event: any) {
    console.log(this.profile)
  }

}
