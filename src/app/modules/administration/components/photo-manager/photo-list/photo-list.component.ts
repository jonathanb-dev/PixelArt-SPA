import { Component, OnInit, Input } from '@angular/core';

// Font awesome
import { faImages } from '@fortawesome/free-solid-svg-icons/faImages';

// Interfaces
import { IPhoto } from 'src/app/interfaces/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  // Font awesome
  faImages = faImages;

  @Input() photos: IPhoto[];

  constructor() { }

  ngOnInit(): void {
  }
}
