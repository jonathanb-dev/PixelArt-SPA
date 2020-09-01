import { Component, OnInit } from '@angular/core';

// Services
import { PhotoService } from 'src/app/services/photo.service';

// Interfaces
import { IPutPhoto } from 'src/app/interfaces/putPhoto';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.scss']
})
export class PhotoEditorComponent implements OnInit {
  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
  }

  onSubmit(photo: IPutPhoto): void {
  }
}
