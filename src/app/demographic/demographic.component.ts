import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demographic',
  templateUrl: './demographic.component.html'
})
export class DemographicComponent {
  demoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.demoForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required]
    });
  }

  onSubmit() {
    // Handle form submission
  }
}
