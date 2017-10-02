import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-media-search',
  templateUrl: './media-search.component.html',
  styleUrls: ['./media-search.component.scss']
})
export class MediaSearchComponent {

  track: string;
  @Input() tracks: any[];

  @Output() update = new EventEmitter();
  @Output() query = new EventEmitter();

  search(event) {
    this.query.emit(event.query);
  }

  select(track) {
    this.update.emit(track);
  }

}
