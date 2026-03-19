import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './modules/site/components/header/header.component';
import { FooterComponent } from './modules/site/components/footer/footer.component';
import { EstatutoComponent } from './modules/site/pages/estatuto/estatuto.component';
import { OrganigramaComponent } from './modules/site/pages/organigrama/organigrama.component';
import { AboutComponent } from './modules/site/pages/about/about.component';
import { TitularComponent } from './modules/site/pages/titular/titular.component';
import { DirectivoComponent } from './modules/site/pages/directivo/directivo.component';
import { HistoricoComponent } from './modules/site/pages/historico/historico.component';
import { ProgramsComponent } from './modules/site/pages/programs/programs.component';
import { ProjectComponent } from './modules/site/pages/project/project.component';
import { PartnersComponent } from './modules/site/pages/partners/partners.component';
import { NewsComponent } from './modules/site/pages/news/news.component';
import { PublicacaoComponent } from './modules/site/pages/publicacao/publicacao.component';
import { PhotosComponent } from './modules/site/pages/photos/photos.component';
import { VideosComponent } from './modules/site/pages/videos/videos.component';
import { PodcastComponent } from './modules/site/pages/podcast/podcast.component';
import { BoletimComponent } from './modules/site/pages/boletim/boletim.component';
import { EventosComponent } from './modules/site/pages/eventos/eventos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, EstatutoComponent, OrganigramaComponent, AboutComponent, TitularComponent, DirectivoComponent, HistoricoComponent,
    ProgramsComponent, ProjectComponent, PartnersComponent, NewsComponent, PublicacaoComponent, PhotosComponent, VideosComponent, PodcastComponent, BoletimComponent, EventosComponent
    
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // ✅ plural
})
export class AppComponent {
  title = 'idaSite';
}
