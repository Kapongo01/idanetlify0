import { 
  Component, 
  OnInit, 
  OnDestroy, 
  HostListener, 
  Inject, 
  PLATFORM_ID 
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  
  currentSlideIndex = 0;
  totalSlides = 4;
  autoplayActive = true;
  autoplayInterval: any;
  slideTransitionDuration = 3000; // 3 segundos
  
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  // Slides data com imagens locais
  slides = [
    {
      id: 'slide1',
      title: 'Transformando o Campo Angolano',
      subtitle: 'Desenvolvimento Rural Sustentável',
      description: 'Há 15 anos promovendo o desenvolvimento agrário através de programas inovadores, investimentos estratégicos e capacitação técnica para uma agricultura moderna e competitiva.',
      primaryBtn: { text: 'Explorar Programas', link: '/programas' },
      secondaryBtn: { text: 'Conhecer o IDA', link: '/sobre' }
    },
    {
      id: 'slide2',
      title: 'Programas Agrícolas',
      subtitle: 'Incentivo à Produção Nacional',
      description: 'Acesso a sementes certificadas, equipamentos modernos e sistemas de irrigação eficientes para aumentar a produtividade e garantir a segurança alimentar das famílias angolanas.',
      primaryBtn: { text: 'Programa de Sementes', link: '/programas/sementes' },
      secondaryBtn: { text: 'Equipamentos Agrícolas', link: '/programas/equipamentos' }
    },
    {
      id: 'slide3',
      title: 'Fortalecendo Comunidades Rurais',
      subtitle: 'Investimento Social e Infraestrutura',
      description: 'Desenvolvimento de infraestruturas comunitárias, acesso à água potável e programas de formação profissional para criar oportunidades e melhorar a qualidade de vida no campo.',
      primaryBtn: { text: 'Ver Projectos', link: '/projectos' },
      secondaryBtn: { text: 'Comunidades Beneficiadas', link: '/comunidades' }
    },
    {
      id: 'slide4',
      title: 'Capacitação Técnica',
      subtitle: 'Formação de Agricultores Modernos',
      description: 'Programas de formação em técnicas agrícolas modernas, gestão de negócios rurais e uso sustentável dos recursos naturais para garantir o futuro da agricultura angolana.',
      primaryBtn: { text: 'Cursos Disponíveis', link: '/formacao' },
      secondaryBtn: { text: 'Inscrever-se', link: '/inscricao' }
    }
  ];

  // Array com as imagens locais
  heroImages = [
    'assets/hero/trator.jpg',
    'assets/hero/_1280.jpg', 
    'assets/hero/CAMPONESES.png',
    'assets/hero/h1.jpg' // Se tiver h4.jpg, senão pode usar h1.jpg ou outra
  ];

  ngOnInit() {
    if (this.isBrowser) {
      // Começar o autoplay após um pequeno delay
      setTimeout(() => {
        this.startAutoplay();
      }, 1000);
    }
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  // Método para obter o background do slide
  getSlideBackground(index: number): any {
    const imageUrl = this.heroImages[index] || this.heroImages[0];
    return {
      'background-image': `linear-gradient(135deg, rgba(27, 94, 32, 0.50) 0%, rgba(46, 125, 50, 0.55) 100%), url('${imageUrl}')`
    };
  }

  nextSlide() {
    if (!this.isBrowser) return;
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.totalSlides;
  }

  prevSlide() {
    if (!this.isBrowser) return;
    this.currentSlideIndex = this.currentSlideIndex === 0 ? 
      this.totalSlides - 1 : this.currentSlideIndex - 1;
  }

  goToSlide(index: number) {
    if (!this.isBrowser || index === this.currentSlideIndex) return;
    this.currentSlideIndex = index;
  }

  startAutoplay() {
    if (!this.isBrowser || this.autoplayInterval) return;
    
    this.autoplayActive = true;
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, this.slideTransitionDuration);
  }

  stopAutoplay() {
    if (!this.isBrowser || !this.autoplayInterval) return;
    
    clearInterval(this.autoplayInterval);
    this.autoplayInterval = null;
    this.autoplayActive = false;
  }

  toggleAutoplay() {
    if (!this.isBrowser) return;
    
    if (this.autoplayActive) {
      this.stopAutoplay();
    } else {
      this.startAutoplay();
    }
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    if (this.isBrowser && this.autoplayActive) {
      this.stopAutoplay();
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.isBrowser && !this.autoplayActive) {
      this.startAutoplay();
    }
  }

  // Touch events para mobile
  touchStartX = 0;

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    if (!this.isBrowser) return;
    this.touchStartX = event.touches[0].clientX;
    this.stopAutoplay();
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    if (!this.isBrowser) return;
    
    const touchEndX = event.changedTouches[0].clientX;
    const diff = touchEndX - this.touchStartX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        this.prevSlide(); // Swipe para direita
      } else {
        this.nextSlide(); // Swipe para esquerda
      }
    }
    
    this.startAutoplay();
  }

  // Controle por teclado
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (!this.isBrowser) return;
    
    switch(event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        this.prevSlide();
        break;
      case 'ArrowRight':
        event.preventDefault();
        this.nextSlide();
        break;
      case ' ':
      case 'Spacebar':
        event.preventDefault();
        this.toggleAutoplay();
        break;
    }
  }
}