import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type PhotoCategory = 'all' | 'projects' | 'events' | 'training' | 'infrastructure' | 'community';

interface PhotoAlbum {
  id: number;
  title: string;
  description: string;
  category: PhotoCategory;
  coverImage: string;
  photoCount: number;
  date: string;
  featured: boolean;
  photos: string[];
}

interface Category {
  value: PhotoCategory;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent {
  pageData = {
    hero: {
      title: 'Galeria de Fotos',
      subtitle: 'Registos visuais do nosso trabalho e impacto nas comunidades rurais',
      backgroundImage: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    }
  };

  selectedCategory: PhotoCategory = 'all';
  selectedAlbum: PhotoAlbum | null = null;
  lightboxActive: boolean = false;
  currentPhotoIndex: number = 0;

categories: Category[] = [
  { value: 'all', label: 'Todos os Álbuns', icon: 'fas fa-camera' },
  { value: 'projects', label: 'Projectos', icon: 'fas fa-tractor' },
  { value: 'events', label: 'Eventos', icon: 'fas fa-calendar-alt' },
  { value: 'training', label: 'Formações', icon: 'fas fa-graduation-cap' },
  { value: 'infrastructure', label: 'Infraestruturas', icon: 'fas fa-hard-hat' },
  { value: 'community', label: 'Comunidades', icon: 'fas fa-users' }
];

  albums: PhotoAlbum[] = [
    {
      id: 1,
      title: 'Inauguração do Centro de Formação Agrária',
      description: 'Cerimónia de inauguração do novo centro de formação em técnicas agrícolas modernas',
      category: 'infrastructure',
      coverImage: 'assets/galeria/fotos/centro_de_formacao/centro.jpg',
      photoCount: 10,
      date: '2024-01-15',
      featured: true,
      photos: [
        'assets/galeria/fotos/centro_de_formacao/transformacaoagricola.jpg',
        'assets/galeria/fotos/centro_de_formacao/cursooperadormaquina.jpg',
        'assets/galeria/fotos/centro_de_formacao/formacaoagricolacolheita.png',
        'assets/galeria/fotos/centro_de_formacao/institutoMedioAgrarioHuambo.jpg'
      ]
    },
    {
      id: 2,
      title: 'Workshop de Agricultura Sustentável',
      description: 'Formação prática sobre técnicas de agricultura sustentável para pequenos produtores',
      category: 'training',
      coverImage: 'assets/galeria/fotos/workshop/fertilizantes-e-agrominerais.jpg',
      photoCount: 14,
      date: '2024-01-12',
      featured: true,
      photos: [
        'assets/galeria/fotos/workshop/ecoangola.jpg',
        'assets/galeria/fotos/workshop/cafecuanzanorte.jpeg',
        'assets/galeria/fotos/workshop/triobo_sustentavel.jpg',
        'assets/galeria/fotos/workshop/IMG_8865.jpg'
      ]
    },
    {
      id: 3,
      title: 'Projecto de Irrigação em Malanje',
      description: 'Implementação de sistema de irrigação em comunidades rurais da província de Malanje',
      category: 'projects',
      coverImage: 'assets/galeria/fotos/irrigacao/irrigacaoagro7.jpg',
      photoCount: 3,
      date: '2024-01-10',
      featured: false,
      photos: [
          'assets/galeria/fotos/irrigacao/irrigacaoagro2.jpg',
          'assets/galeria/fotos/irrigacao/irrigacaoagro5.jpg',
          'assets/galeria/fotos/irrigacao/irrigacaoagro7.jpg'
      ]
    },
    {
      id: 4,
      title: 'Feira Agrária Nacional 2024',
      description: 'Participação do IDA na maior feira agrária do país com stands e demonstrações',
      category: 'events',
      coverImage:'assets/galeria/fotos/feira/feira1.jpeg',
      photoCount: 5,
      date: '2024-01-08',
      featured: false,
      photos: [
        'assets/galeria/fotos/feira/feira5.jpg',
        'assets/galeria/fotos/feira/feira3.jpg',
        'assets/galeria/fotos/feira/feira2.jpeg',
        'assets/galeria/fotos/feira/feira-agricultura.jpg',
        'assets/galeria/fotos/feira/feira4.jpeg'
      ]
    },
    {
      id: 5,
      title: 'Visita às Comunidades Rurais do Huambo',
      description: 'Registo do trabalho desenvolvido com comunidades agrícolas tradicionais',
      category: 'community',
      coverImage:'assets/galeria/fotos/comunidade/comunidade1.jpeg',
      photoCount: 6,
      date: '2024-01-05',
      featured: false,
      photos: [
        'assets/galeria/fotos/comunidade/comunidade2.jpeg',
        'assets/galeria/fotos/comunidade/comunidade3.jpeg',
        'assets/galeria/fotos/comunidade/comunidade5.png',
        'assets/galeria/fotos/comunidade/comunidade4.jpg',
        'assets/galeria/fotos/comunidade/comunidadeteste.jpg',
        'assets/galeria/fotos/comunidade/comunidade7.png'

      ]
    },
    {
      id: 6,
      title: 'Construção de Armazéns Comunitários',
      description: 'Desenvolvimento de infraestruturas de armazenamento para produtos agrícolas',
      category: 'infrastructure',
      coverImage: 'assets/galeria/fotos/armazem/armazem1.jpeg',
      photoCount: 2,
      date: '2024-01-03',
      featured: false,
      photos: [
        'assets/galeria/fotos/armazem/armazem2.jpeg'
      ]
    }
  ];

  get filteredAlbums() {
    if (this.selectedCategory === 'all') {
      return this.albums;
    }
    return this.albums.filter(album => album.category === this.selectedCategory);
  }

  getCategoryInfo(categoryValue: PhotoCategory): Category {
    return this.categories.find(cat => cat.value === categoryValue) || this.categories[0];
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-AO', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  }

  openAlbum(album: PhotoAlbum) {
    this.selectedAlbum = album;
  }

  closeAlbum() {
    this.selectedAlbum = null;
    this.lightboxActive = false;
  }

  openLightbox(photoIndex: number) {
    this.currentPhotoIndex = photoIndex;
    this.lightboxActive = true;
  }

  closeLightbox() {
    this.lightboxActive = false;
  }

  nextPhoto() {
    if (this.selectedAlbum && this.currentPhotoIndex < this.selectedAlbum.photos.length - 1) {
      this.currentPhotoIndex++;
    }
  }

  prevPhoto() {
    if (this.currentPhotoIndex > 0) {
      this.currentPhotoIndex--;
    }
  }

  downloadAlbum() {
    // Implementar download do álbum
    console.log('Download do álbum:', this.selectedAlbum?.title);
  }

  downloadPhoto() {
    // Implementar download da foto
    console.log('Download da foto:', this.currentPhotoIndex);
  }

  sharePhoto() {
    // Implementar partilha da foto
    console.log('Partilhar foto:', this.currentPhotoIndex);
  }
}
