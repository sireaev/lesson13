import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Profile } from '../../interfaces/profile.interface';

/**
 * Reactive Forms Example
 */

@Component({
  selector: 'app-create-profile-reactive-forms',
  templateUrl: './create-profile-reactive-forms.component.html',
  styleUrls: ['./create-profile-reactive-forms.component.scss']
})
export class CreateProfileReactiveFormsComponent implements OnInit {
  profileForm: FormGroup;
  mySurname: string;
  profileMock: Profile = {
    name: 'Vladislav',
    surname: 'Sireaev',
    age: 26,
    password: 'test123',
    isActivated: true,
    settings: {
      isDarkTheme: true
    }
  }
  constructor(private fb: FormBuilder,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscribeForQueryParams();
  }

  subscribeForNameChanges(): void {
    this.profileForm.get('name')?.valueChanges.subscribe((value: string) => {
      console.log('name changed', value);
    })
  }

  subscribeForQueryParams(): void {
    this.route.queryParams.subscribe((response: any) => {
      if (response.id) {
        this.initForm(this.profileMock)
      } else {
        this.initForm();
      }

      this.subscribeForNameChanges();
    })
  }

  // subscribeForParams(): void {
  //   this.route.params.subscribe((params: any) => {
  //     if (params.id) {

  //     } else {

  //     }
  //   })
  // }

  initForm(data: Profile = {} as Profile): void {
    this.profileForm = this.fb.group({
      name: this.fb.control(data?.name, [Validators.required,
        // Validators.pattern('[A-Za-z- ]+')
        this.validarePentruCifre
      ]),
      surname: this.fb.control(data?.name, [Validators.required,
        // Validators.max(10),
        // Validators.min(5),
        // Validators.maxLength(10),
        // Validators.minLength(5)
      ]),
      age: this.fb.control(data?.age, [Validators.required]),
      password: this.fb.control(data?.password, [Validators.required]),
      isActivated: this.fb.control(data?.isActivated, []),
      settings: this.fb.group({
        isDarkTheme: this.fb.control(data?.settings?.isDarkTheme, [])
      })
    })

    // this.profileForm.get('name')?.setErrors({ numberValidation: true });
    // this.profileForm.get('name')?.patchValue('este ceva initial #');
    // this.profileForm.get('name')?.markAsTouched();
    // this.profileForm.get('name')?.setValue('')
  }

  validarePentruCifre(control: FormControl): { [key: string]: any } | null {
    if (control.dirty || control.touched) {
      return control.value.includes('#') ? { numberValidation: true } : null;
    }

    return null;
  }
}
