import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service';

interface Profile {
  id?: number;
  name: string;
  settings: any;
}

@Component({
  selector: 'app-details-profiles',
  templateUrl: './details-profiles.component.html',
  styleUrls: ['./details-profiles.component.scss']
})
export class DetailsProfilesComponent implements OnInit {
  profile: Profile | null = null;
  constructor(private profileService: ProfileService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.subscribeForParams();
    this.router.navigate(['../../list'], { relativeTo: this.route });
  }

  subscribeForParams(): void {
    this.route.params.subscribe((response: any) => {
      if (response['ceva'] as number) {
        this.getProfile(+response.id);
      }
    })
  }

  getProfile(id: number) {
    this.profileService.get(id).subscribe((response: any) => {
      this.profile = response;
    });
  }

}
