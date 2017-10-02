import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-media-progress',
  templateUrl: './media-progress.component.html',
  styleUrls: ['./media-progress.component.scss']
})
export class MediaProgressComponent {
  // Played
  @Input() elapsed: string;
  // Total time
  @Input() total: string;
  // Current time for the progress bar
  @Input() current: number;
}
