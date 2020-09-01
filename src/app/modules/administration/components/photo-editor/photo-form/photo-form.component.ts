import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// Interfaces
import { IPutPhoto } from 'src/app/interfaces/putPhoto';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss']
})
export class PhotoFormComponent implements OnInit {
  photoForm: FormGroup;
  @Output() formSubmit = new EventEmitter<IPutPhoto>();

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.photoForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'description': new FormControl(null)
    });
  }
  
  onSubmit(): void {
    if (this.photoForm.valid) {
      this.formSubmit.emit(this.photoForm.value);
    }
  }
}
