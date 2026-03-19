import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// ADICIONAR 'all' AO TIPO VideoCategory
type VideoCategory = 'all' | 'tutorials' | 'reports' | 'interviews' | 'events' | 'technology';


interface VideoItem {
  id: number;
  title: string;
  description: string;
  category: VideoCategory; // Agora inclui 'all'
  duration: string;
  thumbnail: string;
  videoUrl: string;
  views: number;
  likes: number;
  date: string;
  featured: boolean;
  tags: string[];
}

interface Category {
  value: VideoCategory;
  label: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent {
  pageData = {
    hero: {
      title: 'Galeria de Vídeos',
      subtitle: 'Conteúdo audiovisual sobre as nossas iniciativas e o desenvolvimento agrário',
      backgroundImage: 'https://images.unsplash.com/photo-1556761175-4b46acdc2127?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    }
  };

  // Filtros e pesquisa
  searchTerm: string = '';
  selectedCategory: VideoCategory = 'all'; // Agora o tipo inclui 'all'
  sortBy: string = 'newest';

  // Vídeos
  videos: VideoItem[] = [
    {
      id: 1,
      title: 'Tutorial: Como Implementar Sistema de Irrigação Eficiente',
      description: 'Aprenda as técnicas mais eficientes para implementar sistemas de irrigação que economizam água e aumentam a produtividade.',
      category: 'tutorials',
      duration: '15:30',
      thumbnail: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      videoUrl: 'https://youtube.com/watch?v=exemplo1',
      views: 2450,
      likes: 156,
      date: '2024-01-15',
      featured: true,
      tags: ['Irrigação', 'Tutorial', 'Água', 'Eficiência']
    },
    {
      id: 2,
      title: 'Reportagem Especial: O Renascimento da Agricultura Familiar',
      description: 'Conheça histórias inspiradoras de famílias que transformaram suas vidas através da agricultura familiar com apoio do IDA.',
      category: 'reports',
      duration: '22:45',
      thumbnail: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      videoUrl: 'https://youtube.com/watch?v=exemplo2',
      views: 1890,
      likes: 134,
      date: '2024-01-12',
      featured: true,
      tags: ['Agricultura Familiar', 'Reportagem', 'Histórias']
    },
    {
      id: 3,
      title: 'Entrevista com o Ministro da Agricultura',
      description: 'Conversa exclusiva sobre as novas políticas e investimentos no sector agrário para 2024.',
      category: 'interviews',
      duration: '28:15',
      thumbnail: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      videoUrl: 'https://youtube.com/watch?v=exemplo3',
      views: 3120,
      likes: 245,
      date: '2024-01-10',
      featured: false,
      tags: ['Entrevista', 'Ministro', 'Políticas']
    },
    {
      id: 4,
      title: 'Feira Agrária 2024 - Melhores Momentos',
      description: 'Confira os highlights da maior feira agrária do país com as últimas inovações e tecnologias.',
      category: 'events',
      duration: '18:20',
      thumbnail: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      videoUrl: 'https://youtube.com/watch?v=exemplo4',
      views: 1670,
      likes: 98,
      date: '2024-01-08',
      featured: false,
      tags: ['Feira', 'Evento', 'Tecnologia']
    },
    {
      id: 5,
      title: 'Tecnologia: Drones na Agricultura de Precisão',
      description: 'Como os drones estão revolucionando o monitoramento e gestão de grandes áreas agrícolas.',
      category: 'technology',
      duration: '12:40',
      thumbnail: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      videoUrl: 'https://youtube.com/watch?v=exemplo5',
      views: 2980,
      likes: 187,
      date: '2024-01-05',
      featured: false,
      tags: ['Drones', 'Tecnologia', 'Precisão']
    },
    {
      id: 6,
      title: 'Como Cultivar Hortícolas em Pequenos Espaços',
      description: 'Tutorial completo para produção de hortícolas em varandas e pequenos quintais urbanos.',
      category: 'tutorials',
      duration: '14:25',
      thumbnail: 'https://images.unsplash.com/photo-1598301257982-0cf01499abb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      videoUrl: 'https://youtube.com/watch?v=exemplo6',
      views: 1340,
      likes: 89,
      date: '2024-01-03',
      featured: false,
      tags: ['Hortícolas', 'Urban Farming', 'Tutorial']
    },
    {
      id: 7,
      title: 'Documentário: A Rota do Café Angolano',
      description: 'Da plantação à exportação: a jornada do café angolano rumo aos mercados internacionais.',
      category: 'reports',
      duration: '35:10',
      thumbnail: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      videoUrl: 'https://youtube.com/watch?v=exemplo7',
      views: 2230,
      likes: 167,
      date: '2023-12-28',
      featured: false,
      tags: ['Café', 'Documentário', 'Exportação']
    },
    {
      id: 8,
      title: 'Conversa com Agricultores: Desafios e Conquistas',
      description: 'Agricultores compartilham suas experiências, dificuldades e sucessos na jornada agrícola.',
      category: 'interviews',
      duration: '25:35',
      thumbnail: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      videoUrl: 'https://youtube.com/watch?v=exemplo8',
      views: 1780,
      likes: 112,
      date: '2023-12-25',
      featured: false,
      tags: ['Agricultores', 'Depoimentos', 'Experiências']
    }
  ];

categories: Category[] = [
  { value: 'all', label: 'Todas Categorias', icon: 'fas fa-video', color: 'default' },
  { value: 'tutorials', label: 'Tutoriais', icon: 'fas fa-graduation-cap', color: 'blue' },
  { value: 'reports', label: 'Reportagens', icon: 'fas fa-newspaper', color: 'green' },
  { value: 'interviews', label: 'Entrevistas', icon: 'fas fa-microphone', color: 'purple' },
  { value: 'events', label: 'Eventos', icon: 'fas fa-calendar-alt', color: 'orange' },
  { value: 'technology', label: 'Tecnologia', icon: 'fas fa-laptop', color: 'teal' }
];

  sortOptions = [
    { value: 'newest', label: 'Mais Recentes' },
    { value: 'popular', label: 'Mais Populares' },
    { value: 'views', label: 'Mais Vistos' },
    { value: 'duration', label: 'Duração' }
  ];

  selectedVideo: VideoItem | null = null;

  // MÉTODO CLEAR FILTERS
  clearFilters() {
    this.searchTerm = '';
    this.selectedCategory = 'all';
    this.sortBy = 'newest';
  }

  get filteredVideos() {
    let filtered = this.videos;

    // Aplicar filtro de pesquisa
    if (this.searchTerm) {
      const searchLower = this.searchTerm.toLowerCase();
      filtered = filtered.filter(video =>
        video.title.toLowerCase().includes(searchLower) ||
        video.description.toLowerCase().includes(searchLower) ||
        video.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }

    // Aplicar filtro de categoria
    if (this.selectedCategory !== 'all') {
      filtered = filtered.filter(video => video.category === this.selectedCategory);
    }

    // Aplicar ordenação
    filtered = this.sortVideos(filtered);

    return filtered;
  }

  get featuredVideos() {
    return this.filteredVideos.filter(video => video.featured);
  }

  get regularVideos() {
    return this.filteredVideos.filter(video => !video.featured);
  }

  private sortVideos(videoList: VideoItem[]): VideoItem[] {
    switch (this.sortBy) {
      case 'newest':
        return videoList.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      case 'popular':
        return videoList.sort((a, b) => b.likes - a.likes);
      case 'views':
        return videoList.sort((a, b) => b.views - a.views);
      case 'duration':
        return videoList.sort((a, b) => {
          const timeA = this.durationToSeconds(a.duration);
          const timeB = this.durationToSeconds(b.duration);
          return timeB - timeA;
        });
      default:
        return videoList;
    }
  }

  private durationToSeconds(duration: string): number {
    const parts = duration.split(':');
    if (parts.length === 2) {
      return parseInt(parts[0]) * 60 + parseInt(parts[1]);
    } else if (parts.length === 3) {
      return parseInt(parts[0]) * 3600 + parseInt(parts[1]) * 60 + parseInt(parts[2]);
    }
    return 0;
  }

  getCategoryInfo(categoryValue: VideoCategory): Category {
    const category = this.categories.find(cat => cat.value === categoryValue);
    return category || this.categories[0];
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-AO', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  }

  openVideoModal(video: VideoItem) {
    this.selectedVideo = video;
    // Incrementar visualizações quando abre o modal
    video.views++;
  }

  closeVideoModal() {
    this.selectedVideo = null;
  }

  likeVideo(video: VideoItem) {
    video.likes++;
  }

  playVideo(video: VideoItem) {
    // Em uma implementação real, isso abriria o player de vídeo
    window.open(video.videoUrl, '_blank');
  }

  loadMoreVideos() {
    // Implementar lógica de carregar mais vídeos aqui
    console.log('Carregar mais vídeos...');
  }
}
