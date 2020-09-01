import { Component, OnInit } from '@angular/core';

// Services
import { PhotoService } from 'src/app/services/photo.service';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-photo-uploader',
  templateUrl: './photo-uploader.component.html',
  styleUrls: ['./photo-uploader.component.scss']
})
export class PhotoUploaderComponent implements OnInit {
  selectedFile: File;

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
  }

  onFileSelected(event): void {
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload(): void {
    const formData = new FormData();
    formData.append('file', this.selectedFile, this.selectedFile.name);
    this.photoService.uploadPhoto(formData)
      .subscribe(event => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            console.log('Upload progress: ' + Math.round((event.loaded / event.total) * 100) + '%');
            break;
          case HttpEventType.Response:
            console.log(event);
            break;
        }
      });
  }
}
