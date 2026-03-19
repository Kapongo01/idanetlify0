import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type NewsCategory = 'agricultura' | 'tecnologia' | 'politica' | 'sustentabilidade' | 'eventos';

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
}

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  newsData = {
    title: 'Últimas Notícias',
    subtitle: 'Acompanhe as novidades e desenvolvimentos mais recentes no sector agrário de Angola.',
    categories: ['Todas', 'Agricultura', 'Tecnologia', 'Política', 'Sustentabilidade', 'Eventos'],
    news: [
      {
        id: 1,
        title: 'IDA Lança Programa de Crédito para Agricultura Familiar 2024',
        excerpt: 'Novo programa oferece condições especiais de financiamento para pequenos e médios produtores rurais.',
        content: 'O Instituto de Desenvolvimento Agrário anunciou o lançamento do Programa Especial de Crédito para a Agricultura Familiar 2024, com taxas de juros subsidiadas e prazos de carência extendidos. O programa visa atingir mais de 50.000 famílias agricultoras em todas as províncias de Angola.',
        category: 'politica' as NewsCategory,
        author: 'Ministério da Agricultura',
        date: '2024-01-15',
        readTime: '3 min',
        image: 'assets/hero/h4.jpeg',
        featured: true,
        tags: ['Crédito', 'Agricultura Familiar', 'Financiamento']
      },
      {
        id: 2,
        title: 'Nova Tecnologia de Irrigação Aumenta Produtividade em 40%',
        excerpt: 'Sistema de irrigação inteligente desenvolvido para regiões semiáridas mostra resultados promissores.',
        content: 'Pesquisadores do IDA em parceria com universidades nacionais desenvolveram um sistema de irrigação por gotejamento inteligente que adapta-se automaticamente às condições climáticas. A tecnologia já foi testada em 5 províncias com aumento médio de 40% na produtividade.',
        category: 'tecnologia' as NewsCategory,
        author: 'Departamento de Pesquisa',
        date: '2024-01-12',
        readTime: '4 min',
        image: 'assets/hero/images3.jpg',
        featured: true,
        tags: ['Tecnologia', 'Irrigação', 'Inovação']
      },
      {
        id: 3,
        title: 'Feira Nacional do Camponês Atrai Milhares de Visitantes',
        excerpt: 'Evento promoveu a comercialização directa entre produtores rurais e consumidores urbanos.',
        content: 'A 15ª edição da Feira Nacional do Camponês reuniu mais de 800 expositores e 25.000 visitantes em Luanda. O evento gerou negócios na ordem de 2 milhões de dólares e fortaleceu a conexão entre o campo e a cidade.',
        category: 'eventos' as NewsCategory,
        author: 'Comunicação Social',
        date: '2024-01-10',
        readTime: '2 min',
        image: 'assets/hero/IMG-.jpg',
        featured: false,
        tags: ['Feira', 'Comercialização', 'Evento']
      }


    ]
  };

  activeCategory: string = 'Todas';
  selectedNews: NewsItem | null = null;
  showAllNews: boolean = false;

  setActiveCategory(category: string) {
    this.activeCategory = category;
  }

  selectNews(news: NewsItem) {
    this.selectedNews = this.selectedNews?.id === news.id ? null : news;
  }

  toggleShowAll() {
    this.showAllNews = !this.showAllNews;
  }

  get filteredNews() {
    let news = this.newsData.news;

    if (this.activeCategory !== 'Todas') {
      const categoryMap: { [key: string]: NewsCategory } = {
        'Agricultura': 'agricultura',
        'Tecnologia': 'tecnologia',
        'Política': 'politica',
        'Sustentabilidade': 'sustentabilidade',
        'Eventos': 'eventos'
      };

      const category = categoryMap[this.activeCategory];
      news = news.filter(item => item.category === category);
    }

    if (!this.showAllNews) {
      news = news.slice(0, 4);
    }

    return news;
  }

  get featuredNews() {
    return this.newsData.news.filter(item => item.featured);
  }

  getCategoryColor(category: NewsCategory): string {
    const colorMap: { [key: string]: string } = {
      'agricultura': 'green',
      'tecnologia': 'blue',
      'politica': 'purple',
      'sustentabilidade': 'teal',
      'eventos': 'orange'
    };
    return colorMap[category] || 'gray';
  }

  getCategoryText(category: NewsCategory): string {
    const textMap: { [key: string]: string } = {
      'agricultura': 'Agricultura',
      'tecnologia': 'Tecnologia',
      'politica': 'Política',
      'sustentabilidade': 'Sustentabilidade',
      'eventos': 'Eventos'
    };
    return textMap[category] || category;
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-AO', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  }
}
