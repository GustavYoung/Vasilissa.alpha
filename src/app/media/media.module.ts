// Importa los componentes de terceros
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
// PrimeNG autocomplete fro search
import { AutoCompleteModule } from 'primeng/primeng';
// Cosas hechas a mano o con CLI
import { MediaDetailsComponent } from './media-details/media-details.component';
import { MediaFooterComponent } from './media-footer/media-footer.component';
import { MediaProgressComponent } from './media-progress/media-progress.component';
import { MediaSearchComponent } from './media-search/media-search.component';
import { MediaPlayerComponent } from './media-player/media-player.component';
import { MediaService } from './shared/media.service';
import { ApiService } from './shared/api.service';

@NgModule({
  imports: [
    CommonModule,
    AutoCompleteModule,
    FormsModule,
    HttpModule
  ],
  exports: [
    // Hace disponibles los componentes
    MediaSearchComponent,
    MediaDetailsComponent,
    MediaPlayerComponent,
    MediaProgressComponent,
    MediaFooterComponent
  ],
   // Declara los componentes jajajajaj :P
  declarations: [
    MediaDetailsComponent,
    MediaFooterComponent,
    MediaProgressComponent,
    MediaSearchComponent,
    MediaPlayerComponent
  ],
  providers: [
    // Servicios que se van a consumir :S
    ApiService,
    MediaService
  ],
})
export class MediaModule { }
