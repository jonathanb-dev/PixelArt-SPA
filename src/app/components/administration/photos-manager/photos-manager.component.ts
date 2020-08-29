import { Component, OnInit } from '@angular/core';

// Font awesome
import { faImages } from '@fortawesome/free-solid-svg-icons/faImages';

// Services
import { PhotoService } from 'src/app/services/photo.service';

// Interfaces
import { IPhoto } from 'src/app/interfaces/photo';

@Component({
  selector: 'app-photos-manager',
  templateUrl: './photos-manager.component.html',
  styleUrls: ['./photos-manager.component.scss']
})
export class PhotosManagerComponent implements OnInit {
  faImages = faImages;
  photos: IPhoto[] = [];

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.fetchPhotos();
  }

  fetchPhotos(): void {
    this.photoService.getPhotos().subscribe(photos => this.photos = photos);
  }
}
