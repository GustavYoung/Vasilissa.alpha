import { Component, OnInit } from '@angular/core';
import { MediaService } from './media/shared/media.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title;
  position;
  elapsed;
  duration;
  paused = true;
  tracks: any[] = [];
  filteredTracks: any[] = [];
  backgroundStyle;

  constructor(
    private mediaService: MediaService
  ){}

  ngOnInit() {
    this.mediaService.getPlaylistTracks().subscribe(tracks => {
      this.tracks = tracks;
      this.handleRandom();
    });

    this.mediaService.audio.onended = this.handleEnded.bind(this);
    this.mediaService.audio.ontimeupdate = this.handleTimeUpdate.bind(this);


    // On song end
    this.mediaService.audio.onended = this.handleEnded.bind(this);
    // On play time update
    this.mediaService.audio.ontimeupdate = this.handleTimeUpdate.bind(this);
  }

  handleRandom() {
    // Pluck a song
    const randomTrack = this.mediaService.randomTrack(this.tracks);
    // Play the plucked song
    this.mediaService.play(randomTrack.stream_url)
    // Set the title property
    this.title = randomTrack.title;
    // Create a background based on the playing song
    this.backgroundStyle = this.composeBackgroundStyle(randomTrack.artwork_url)
  }
  composeBackgroundStyle(url) {
    return {
      width: '100%',
      height: '600px',
      backgroundSize:'cover',
      backgroundImage: `linear-gradient(
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ),   url(${this.mediaService.xlArtwork(url)})`
    }
  }
  handleEnded(e) {
    this.handleRandom();
  }
  handleTimeUpdate(e) {
    const elapsed =  this.mediaService.audio.currentTime;
    const duration =  this.mediaService.audio.duration;
    this.position = elapsed / duration;
    this.elapsed = this.mediaService.formatTime(elapsed);
    this.duration = this.mediaService.formatTime(duration);
  }
  handleQuery(payload) {
    this.mediaService.findTracks(payload).subscribe(tracks => {
      this.filteredTracks = tracks;
    });
  }
  handlePausePlay() {
    if(this.mediaService.audio.paused) {
      this.paused = true;
      this.mediaService.audio.play()
    } else {
      this.paused = false;
      this.mediaService.audio.pause()
    }
  }
  handleStop() {
    this.mediaService.audio.pause();
    this.mediaService.audio.currentTime = 0;
    this.paused = false;
  }
  handleBackward() {
    let elapsed =  this.mediaService.audio.currentTime;
    console.log(elapsed);
    if(elapsed >= 5) {
      this.mediaService.audio.currentTime = elapsed - 5;
    }
  }
  handleForward() {
    let elapsed =  this.mediaService.audio.currentTime;
    const duration =  this.mediaService.audio.duration;
    if(duration - elapsed >= 5) {
      this.mediaService.audio.currentTime = elapsed + 5;
    }
  }
}
