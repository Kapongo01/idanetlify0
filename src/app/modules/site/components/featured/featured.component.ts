import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
  highlights: string[];
  gradient: string;
}

@Component({
  selector: 'app-featured',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.scss'
})
export class FeaturedComponent {
  features: Feature[] = [
    {
      id: 1,
      icon: '🌾',
      title: 'Segurança Alimentar',
      description: 'Garantimos o acesso regular e permanente a alimentos de qualidade para todas as famílias rurais.',
      highlights: [
        'Produção sustentável de alimentos',
        'Distribuição equitativa',
        'Acesso a recursos produtivos'
      ],
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      id: 2,
      icon: '<i class="fas fa-university"></i>',
      title: 'Capacitação Institucional',
      description: 'Fortalecimento das organizações rurais através de treinamento e desenvolvimento de competências.',
      highlights: [
        'Gestão administrativa',
        'Planejamento estratégico',
        'Capacitação técnica'
      ],
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      id: 3,
      icon: 'fas fa-chart-line',
      title: 'Acesso ao Mercado',
      description: 'Conectamos produtores rurais aos mercados consumidores com melhores oportunidades comerciais.',
      highlights: [
        'Comercialização direta',
        'Feiras e mercados locais',
        'Canais de distribuição'
      ],
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      id: 4,
      icon: 'as fa-graduation-cap',
      title: 'Gestão do Conhecimento',
      description: 'Sistematização e compartilhamento de experiências e tecnologias para o desenvolvimento rural.',
      highlights: [
        'Pesquisa aplicada',
        'Transferência de tecnologia',
        'Inovação agrícola'
      ],
      gradient: 'from-purple-500 to-violet-600'
    },
    {
      id: 5,
      icon: 'fas fa-tint',
      title: 'Sustentabilidade Ambiental',
      description: 'Implementação de práticas agrícolas sustentáveis e conservação dos recursos naturais.',
      highlights: [
        'Agricultura regenerativa',
        'Manejo sustentável',
        'Conservação do solo'
      ],
      gradient: 'from-teal-500 to-green-600'
    },
    {
      id: 6,
      icon: 'fas fa-users',
      title: 'Agricultura Familiar',
      description: 'Apoio integral às famílias agricultoras com assistência técnica e financiamento adequado.',
      highlights: [
        'Assistência técnica rural',
        'Crédito agrícola',
        'Sucessão familiar'
      ],
      gradient: 'from-rose-500 to-pink-600'
    }
  ];

  selectedFeature: Feature | null = null;

  selectFeature(feature: Feature) {
    this.selectedFeature = this.selectedFeature?.id === feature.id ? null : feature;
  }

  getIconGradient(gradient: string): string {
  const gradients: { [key: string]: string } = {
    'from-green-500 to-emerald-600': 'linear-gradient(135deg, #22c55e, #16a34a)',
    'from-blue-500 to-cyan-600': 'linear-gradient(135deg, #3b82f6, #2563eb)',
    'from-amber-500 to-orange-600': 'linear-gradient(135deg, #f59e0b, #d97706)',
    'from-purple-500 to-violet-600': 'linear-gradient(135deg, #a855f7, #9333ea)',
    'from-teal-500 to-green-600': 'linear-gradient(135deg, #14b8a6, #0d9488)',
    'from-rose-500 to-pink-600': 'linear-gradient(135deg, #f43f5e, #e11d48)'
  };
  return gradients[gradient] || gradients['from-green-500 to-emerald-600'];
}
}
