import { Component, OnInit } from '@angular/core';

// Font awesome
import { faSlidersH } from '@fortawesome/free-solid-svg-icons/faSlidersH';

@Component({
  selector: 'app-photo-list-filters',
  templateUrl: './photo-list-filters.component.html',
  styleUrls: ['./photo-list-filters.component.scss']
})
export class PhotoListFiltersComponent implements OnInit {
  // Font awesome
  faSlidersH = faSlidersH;

  constructor() { }

  ngOnInit(): void {
  }
}
