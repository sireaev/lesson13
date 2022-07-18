import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

interface Profile {
  id?: number;
  name: string;
  settings: any;
}

@Component({
  selector: 'app-list-profiles',
  templateUrl: './list-profiles.component.html',
  styleUrls: ['./list-profiles.component.scss']
})
export class ListProfilesComponent implements OnInit {
  profiles: Profile[] = [];
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.retrieveProfiles();
  }

  retrieveProfiles(): void {
    this.profileService.list({} as any).subscribe((response: any) => {
      this.profiles = response;
    })
  }

  showSettingsObject(settings: any) {
    return JSON.stringify(settings);
  }

}
