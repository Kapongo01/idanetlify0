import { Routes } from '@angular/router';

export const SITE_ROUTES: Routes = [
  {
    path: '',
    children: [

      {
        path: '',
        loadComponent: () =>
          import('./pages/home/home.component').then(m => m.HomeComponent),
      },

      {
        path: 'estatuto-organico',
        loadComponent: () =>
          import('./pages/estatuto/estatuto.component').then(m => m.EstatutoComponent),
      },

      {
        path: 'organigrama',
        loadComponent: () =>
          import('./pages/organigrama/organigrama.component').then(m => m.OrganigramaComponent),
      },

      {
        path: 'ministerio',
        loadComponent: () =>
          import('./pages/about/about.component').then(m => m.AboutComponent),
      },

      {
        path: 'titular',
        loadComponent: () =>
          import('./pages/titular/titular.component').then(m => m.TitularComponent),
      },

      {
        path: 'directivo',
        loadComponent: () =>
          import('./pages/directivo/directivo.component').then(m => m.DirectivoComponent),
      },

      {
        path: 'historico',
        loadComponent: () =>
          import('./pages/historico/historico.component').then(m => m.HistoricoComponent),
      },

      {
        path: 'programas',
        loadComponent: () =>
          import('./pages/programs/programs.component').then(m => m.ProgramsComponent),
      },

      {
        path: 'projectos',
        loadComponent: () =>
          import('./pages/project/project.component').then(m => m.ProjectComponent),
      },

      {
        path: 'parceiros',
        loadComponent: () =>
          import('./pages/partners/partners.component').then(m => m.PartnersComponent),
      },

      {
        path: 'noticias',
        loadComponent: () =>
          import('./pages/news/news.component').then(m => m.NewsComponent),
      },

      {
        path: 'publicacoes',
        loadComponent: () =>
          import('./pages/publicacao/publicacao.component').then(m => m.PublicacaoComponent),
      },

      {
        path: 'galeria-fotos',
        loadComponent: () =>
          import('./pages/photos/photos.component').then(m => m.PhotosComponent),
      },

      {
        path: 'galeria-videos',
        loadComponent: () =>
          import('./pages/videos/videos.component').then(m => m.VideosComponent),
      },

      {
        path: 'podcasts',
        loadComponent: () =>
          import('./pages/podcast/podcast.component').then(m => m.PodcastComponent),
      },

      {
        path: 'boletins',
        loadComponent: () =>
          import('./pages/boletim/boletim.component').then(m => m.BoletimComponent),
      },

      {
        path: 'eventos',
        loadComponent: () =>
          import('./pages/eventos/eventos.component').then(m => m.EventosComponent),
      },



      // fallback interno do site
      { path: '**', redirectTo: '' },
    ],
  },
];
