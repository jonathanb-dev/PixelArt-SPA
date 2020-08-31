import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss']
})
export class PhotoFormComponent implements OnInit {
  photoForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.photoForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'description': new FormControl(null),
      'photo': new FormControl(null, Validators.required)
    });
  }

  onSubmit(): void {
  }
}
