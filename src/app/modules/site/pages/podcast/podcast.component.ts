import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-podcast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss']
})
export class PodcastComponent {

  constructor(private sanitizer: DomSanitizer) {}

  pageData = {
    hero: {
      title: 'Galeria de Podcast e Vídeos',
      subtitle: 'Registos de debates, entrevistas e vídeos institucionais sobre a agricultura',
      backgroundImage: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    }
  };

  categories = [
    { value: 'all', label: 'Todos', icon: 'fas fa-podcast' },
    { value: 'entrevistas', label: 'Entrevistas', icon: 'fas fa-microphone' },
    { value: 'reportagens', label: 'Reportagens', icon: 'fas fa-newspaper' },
    { value: 'tecnologia', label: 'Tecnologia', icon: 'fas fa-laptop' },
    { value: 'videos', label: 'Vídeos', icon: 'fas fa-video' },
    { value: 'eventos', label: 'Eventos', icon: 'fas fa-calendar-alt' }
  ];

  selectedCategory = 'all';

  media = [
    {
      title: 'Entrevista com agricultor local',
      description: 'Conversa sobre técnicas de cultivo sustentável.',
      date: '2026-03-01',
      category: 'entrevistas',
      type: 'podcast',
      imageUrl: 'assets/galeria/podcast/entrevista1.jpg',
      audioUrl: '#',
      downloads: 120,
      likes: 45,
      views: 300
    },
    {
      title: 'Boletim Semanal de Mercado',
      description: 'Análise das cotações e tendências do mercado agrícola.',
      date: '2026-02-28',
      category: 'reportagens',
      type: 'podcast',
      imageUrl: 'assets/galeria/podcast/mercado.jpg',
      audioUrl: '#',
      downloads: 85,
      likes: 30,
      views: 210
    },
    {
      title: 'Tecnologias na Agricultura',
      description: 'Novas ferramentas e máquinas que estão mudando a agricultura.',
      date: '2026-02-25',
      category: 'tecnologia',
      type: 'podcast',
      imageUrl: 'assets/galeria/podcast/agricultura-moderna.jpg',
      audioUrl: '#',
      downloads: 60,
      likes: 25,
      views: 150
    },
    {
      title: 'Evento de Inovação Agrícola',
      description: 'Cobertura completa do evento com palestras e demonstrações.',
      date: '2026-02-20',
      category: 'eventos',
      type: 'video',
      videoUrl: 'https://www.youtube.com/embed/OVS0_npReGU',
      downloads: 80,
      likes: 50,
      views: 320
    },
    {
      title: 'Vídeo Institucional IDA',
      description: 'Apresentação das ações e projetos do Instituto de Desenvolvimento Agrário.',
      date: '2026-02-15',
      category: 'videos',
      type: 'video',
      videoUrl: 'https://www.youtube.com/embed/lcEV-aKPeE8',
      downloads: 100,
      likes: 70,
      views: 400
    },
    {
      title: 'Vídeo Atividades Rurais do IDA',
      description: 'Apresentação das ações e projetos rurais do Instituto de Desenvolvimento Agrário.',
      date: '2026-02-15',
      category: 'videos',
      type: 'video',
      videoUrl: 'https://www.youtube.com/embed/7WItZa6XcFQ',
      downloads: 100,
      likes: 70,
      views: 400
    }
  ];

  getCategoryInfo(value: string) {
    return this.categories.find(c => c.value === value) || { icon: 'fas fa-podcast', label: 'Todos' };
  }

  playMedia(item: any) {
    console.log('Play:', item.title);
  }

  downloadMedia(item: any) {
    console.log('Download:', item.title);
  }

  // 🔐 Função para tornar a URL do vídeo segura
  getSafeVideoUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

get filteredMedia() {
  if (this.selectedCategory === 'all') {
    return this.media;
  }
  return this.media.filter(item => item.category === this.selectedCategory);
}

}
