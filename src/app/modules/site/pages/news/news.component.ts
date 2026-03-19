import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type NewsCategory = 'all' | 'agriculture' | 'technology' | 'policy' | 'sustainability' | 'events';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: NewsCategory;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
  tags: string[];
  views: number;
  likes: number;
}

interface Category {
  value: NewsCategory;
  label: string;
  icon: string;
  color: string; // ADICIONANDO A PROPRIEDADE COLOR
}

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {

  pageData = {
    hero: {
      title: 'Notícias do IDA',
      subtitle: 'Acompanhe as últimas notícias e desenvolvimentos do sector agrário angolano',
      backgroundImage: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    }
  };

// HERO

currentIndex = 0;
interval: any;


slides = [
  {
    image: 'assets/hero/tec-agro1.jpg',
    title: 'Agricultura Inteligente em Angola',
    subtitle: 'Tecnologia a impulsionar o campo'
  },
  {
    image: 'assets/hero/tec-agro2.jpg',
    title: 'Novos Projetos do IDA',
    subtitle: 'Desenvolvimento rural sustentável'
  },
  {
    image: 'assets/hero/tec-agro3.jpg',
    title: 'Inovação no Setor Agrícola',
    subtitle: 'Sensores e automação no campo'
  }
];

ngOnInit() {
  this.startAutoSlide();
}

ngOnDestroy() {
  clearInterval(this.interval);
}

startAutoSlide() {
  this.interval = setInterval(() => {
    this.nextSlide();
  }, 5000);
}

nextSlide() {
  this.currentIndex = (this.currentIndex + 1) % this.slides.length;
}

prevSlide() {
  this.currentIndex =
    (this.currentIndex - 1 + this.slides.length) % this.slides.length;
}


  // Filtros e pesquisa
  searchTerm: string = '';
  selectedCategory: NewsCategory = 'all';
  selectedPeriod: string = 'all';
  sortBy: string = 'newest';

  // Notícias
  news: NewsItem[] = [
    {
      id: 1,
      title: 'IDA Lança Programa de Crédito para Agricultura Familiar 2024',
      excerpt: 'Novo programa oferece condições especiais de financiamento para pequenos e médios produtores rurais.',
      content: 'O Instituto de Desenvolvimento Agrário anunciou o lançamento do Programa Especial de Crédito para a Agricultura Familiar 2024. O programa visa beneficiar mais de 50.000 famílias agricultoras em todas as províncias de Angola, com condições especiais de financiamento e acompanhamento técnico especializado.',
      category: 'policy',
      author: 'Ministério da Agricultura',
      date: '2024-01-15',
      readTime: '3 min',
      image: 'assets/hero/pessoas-africanas-colhendo-legumes.jpg',
      featured: true,
      tags: ['Crédito', 'Agricultura Familiar', 'Financiamento'],
      views: 1245,
      likes: 89
    },
    {
      id: 2,
      title: 'Nova Tecnologia de Irrigação Aumenta Produtividade em 40%',
      excerpt: 'Sistema de irrigação inteligente desenvolvido para regiões semiáridas mostra resultados promissores.',
      content: 'Pesquisadores do IDA em parceria com universidades nacionais desenvolveram um sistema de irrigação inteligente que promete revolucionar a agricultura nas regiões semiáridas. O sistema utiliza sensores IoT e inteligência artificial para optimizar o uso da água.',
      category: 'technology',
      author: 'Departamento de Pesquisa',
      date: '2024-01-12',
      readTime: '4 min',
      image: 'assets/hero/tec-agro2.jpg',
      featured: true,
      tags: ['Tecnologia', 'Irrigação', 'Inovação'],
      views: 987,
      likes: 67
    },
    {
      id: 3,
      title: 'Workshop Sobre Agricultura Sustentável em Luanda',
      excerpt: 'Evento reúne especialistas para discutir práticas agrícolas sustentáveis e eco-friendly.',
      content: 'O IDA organiza workshop sobre agricultura sustentável com participação de especialistas internacionais. O evento visa promover práticas agrícolas mais ecológicas e eficientes.',
      category: 'events',
      author: 'Comité de Eventos IDA',
      date: '2024-01-10',
      readTime: '2 min',
      image: 'assets/hero/W-A.jpg',
      featured: false,
      tags: ['Workshop', 'Sustentabilidade', 'Evento'],
      views: 456,
      likes: 34
    },
    {
      id: 4,
      title: 'Produção de Café Atinge Recorde Histórico',
      excerpt: 'Produtores de café registram aumento de 25% na produção este ano.',
      content: 'A produção de café em Angola atingiu números recordes este ano, com um aumento de 25% em relação ao ano anterior. Os produtores atribuem o sucesso às novas técnicas de cultivo.',
      category: 'agriculture',
      author: 'Associação de Cafeicultores',
      date: '2024-01-08',
      readTime: '3 min',
      image: 'assets/hero/cafe.jpg',
      featured: false,
      tags: ['Café', 'Produção', 'Recorde'],
      views: 789,
      likes: 56
    },
    {
      id: 5,
      title: 'Novas Políticas para Exportação Agrária',
      excerpt: 'Governo simplifica processo de exportação para produtos agrícolas.',
      content: 'O governo angolano anunciou novas medidas para facilitar a exportação de produtos agrícolas, reduzindo a burocracia e oferecendo incentivos fiscais.',
      category: 'policy',
      author: 'Ministério do Comércio',
      date: '2024-01-05',
      readTime: '2 min',
      image: 'assets/hero/politica-expo-agro.png',
      featured: false,
      tags: ['Exportação', 'Política', 'Comércio'],
      views: 634,
      likes: 45
    },
    {
      id: 6,
      title: 'Projecto de Energia Solar para Comunidades Rurais',
      excerpt: 'IDA implementa sistema de energia solar em comunidades agrícolas remotas.',
      content: 'O Instituto de Desenvolvimento Agrário está a implementar sistemas de energia solar em comunidades rurais para melhorar a produtividade agrícola.',
      category: 'sustainability',
      author: 'Departamento de Energia',
      date: '2024-01-03',
      readTime: '4 min',
      image: 'assets/hero/solar.jpg',
      featured: false,
      tags: ['Energia Solar', 'Sustentabilidade', 'Comunidades'],
      views: 523,
      likes: 78
    },
    {
      id: 7,
      title: 'Feira Agrária Internacional em Benguela',
      excerpt: 'Maior feira agrária do país acontece este mês com participantes internacionais.',
      content: 'A Feira Agrária Internacional de Benguela promete reunir expositores de todo o mundo para mostrar as últimas inovações do sector.',
      category: 'events',
      author: 'Comité da Feira',
      date: '2024-01-02',
      readTime: '2 min',
      image: 'assets/hero/IMG-.jpg',
      featured: false,
      tags: ['Feira', 'Internacional', 'Evento'],
      views: 412,
      likes: 29
    },
    {
      id: 8,
      title: 'App IDA Connect Lançada para Agricultores',
      excerpt: 'Nova aplicação móvel conecta agricultores com especialistas e mercados.',
      content: 'O IDA lançou a aplicação móvel IDA Connect, que permite aos agricultores aceder a informações técnicas, conectar com especialistas e encontrar mercados para seus produtos.',
      category: 'technology',
      author: 'Departamento de TI',
      date: '2023-12-28',
      readTime: '3 min',
      image: 'assets/hero/aplicativos-agro.png',
      featured: false,
      tags: ['App', 'Tecnologia', 'Connect'],
      views: 891,
      likes: 63
    }
  ];

  // CATEGORIAS COM PROPRIEDADE COLOR ADICIONADA
  categories: Category[] = [
    { value: 'all', label: 'Todas Categorias', icon: '', color: 'default' },
    { value: 'agriculture', label: 'Agricultura', icon: '', color: 'green' },
    { value: 'technology', label: 'Tecnologia', icon: '', color: 'blue' },
    { value: 'policy', label: 'Políticas', icon: '', color: 'purple' },
    { value: 'sustainability', label: 'Sustentabilidade', icon: '', color: 'teal' },
    { value: 'events', label: 'Eventos', icon: '', color: 'orange' }
  ];

  periods = [
    { value: 'all', label: 'Todo o Período' },
    { value: 'week', label: 'Esta Semana' },
    { value: 'month', label: 'Este Mês' },
    { value: 'year', label: 'Este Ano' }
  ];

  sortOptions = [
    { value: 'newest', label: 'Mais Recentes' },
    { value: 'popular', label: 'Mais Populares' },
    { value: 'views', label: 'Mais Vistas' }
  ];

  selectedNews: NewsItem | null = null;

  // MÉTODO CLEAR FILTERS
  clearFilters() {
    this.searchTerm = '';
    this.selectedCategory = 'all';
    this.selectedPeriod = 'all';
    this.sortBy = 'newest';
  }

  get filteredNews() {
    let filtered = this.news;

    // Aplicar filtro de pesquisa
    if (this.searchTerm) {
      const searchLower = this.searchTerm.toLowerCase();
      filtered = filtered.filter(news =>
        news.title.toLowerCase().includes(searchLower) ||
        news.excerpt.toLowerCase().includes(searchLower) ||
        news.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
        news.author.toLowerCase().includes(searchLower)
      );
    }

    // Aplicar filtro de categoria
    if (this.selectedCategory !== 'all') {
      filtered = filtered.filter(news => news.category === this.selectedCategory);
    }

    // Aplicar filtro de período
    if (this.selectedPeriod !== 'all') {
      const now = new Date();

      filtered = filtered.filter(news => {
        const itemDate = new Date(news.date);
        const diffTime = now.getTime() - itemDate.getTime();
        const diffDays = diffTime / (1000 * 60 * 60 * 24);

        switch (this.selectedPeriod) {
          case 'week':
            return diffDays <= 7;
          case 'month':
            return diffDays <= 30;
          case 'year':
            return diffDays <= 365;
          default:
            return true;
        }
      });
    }

    // Aplicar ordenação
    filtered = this.sortNews(filtered);

    return filtered;
  }

  get featuredNews() {
    return this.filteredNews.filter(news => news.featured);
  }

  get regularNews() {
    return this.filteredNews.filter(news => !news.featured);
  }

  private sortNews(newsList: NewsItem[]): NewsItem[] {
    switch (this.sortBy) {
      case 'newest':
        return newsList.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      case 'popular':
        return newsList.sort((a, b) => b.likes - a.likes);
      case 'views':
        return newsList.sort((a, b) => b.views - a.views);
      default:
        return newsList;
    }
  }

  getCategoryInfo(categoryValue: NewsCategory): Category {
    const category = this.categories.find(cat => cat.value === categoryValue);
    return category || this.categories[0];
  }

  getPeriodLabel(periodValue: string): string {
    const period = this.periods.find(p => p.value === periodValue);
    return period ? period.label : '';
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-AO', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  }

  openNewsModal(news: NewsItem) {
    this.selectedNews = news;
    // Incrementar visualizações quando abre o modal
    news.views++;
  }

  closeNewsModal() {
    this.selectedNews = null;
  }

  likeNews(news: NewsItem) {
    news.likes++;
  }

  loadMoreNews() {
    // Implementar lógica de carregar mais notícias aqui
    console.log('Carregar mais notícias...');
  }
}
