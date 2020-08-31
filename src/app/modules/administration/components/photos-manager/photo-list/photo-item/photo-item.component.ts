import { Component, OnInit, Input } from '@angular/core';

// Font awesome
import { faEdit } from '@fortawesome/free-solid-svg-icons';

// Interfaces
import { IPhoto } from 'src/app/interfaces/photo';

@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.scss']
})
export class PhotoItemComponent implements OnInit {
  // Font awesome
  faEdit = faEdit;

  @Input() photo: IPhoto;

  constructor() { }

  ngOnInit(): void {
  }
}
