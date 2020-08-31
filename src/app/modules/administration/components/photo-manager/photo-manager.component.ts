import { Component, OnInit } from '@angular/core';

// Services
import { PhotoService } from 'src/app/services/photo.service';

// Interfaces
import { IPhoto } from 'src/app/interfaces/photo';

@Component({
  selector: 'app-photo-manager',
  templateUrl: './photo-manager.component.html',
  styleUrls: ['./photo-manager.component.scss']
})
export class PhotoManagerComponent implements OnInit {
  photos: IPhoto[] = [];

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.fetchPhotos();
  }

  fetchPhotos(): void {
    this.photoService.getPhotos().subscribe(photos => this.photos = photos);
  }
}
