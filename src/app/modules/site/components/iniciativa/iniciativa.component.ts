import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Initiative {
  id: number;
  icon: string;
  title: string;
  description: string;
  features: string[];
  status: 'active' | 'completed' | 'planned';
}

@Component({
  selector: 'app-iniciativa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './iniciativa.component.html',
  styleUrls: ['./iniciativa.component.scss']
})
export class IniciativaComponent {
  initiativesData = {
    title: 'Sobre o IDA',
    subtitle: 'Conheça o Instituto de Desenvolvimento Agrário e os princípios que norteiam a nossa ação no desenvolvimento rural angolano',
    initiatives: [
      {
        id: 1,
        icon: 'fas fa-bullseye',
        title: 'Nossa Missão',
        description: 'Promover o desenvolvimento agrário sustentável através da implementação de políticas, programas e projetos inovadores.',
        features: [
          /*'Aumentar a produtividade agrícola',
          'Melhorar a segurança alimentar',
          'Elevar a qualidade de vida rural',
          'Implementar políticas agrícolas eficazes' */
        ],
        status: 'active'
      },
      {
        id: 2,
        icon: 'fas fa-eye',
        title: 'Nossa Visão',
        description: 'Ser referência nacional no desenvolvimento agrário, contribuindo para uma Angola auto-suficiente em produção agrícola.',
        features: [
          'Agricultura moderna e competitiva',
          'Sustentabilidade ambiental',
          'Auto-suficiência alimentar',
          'Referência nacional em agrário'
        ],
        status: 'active'
      },
      {
        id: 3,
        icon: 'fas fa-gem',
        title: 'Nossos Valores',
        description: 'Princípios éticos e profissionais que orientam todas as nossas ações institucionais.',
        features: [
          'Compromisso com resultados',
          'Transparência e integridade',
          'Inovação e excelência',
          'Sustentabilidade ambiental'
        ],
        status: 'active'
      },
      {
        id: 4,
        icon: 'fas fa-university',
        title: 'Nossa História',
        description: '15 anos de experiência e dedicação ao desenvolvimento rural sustentável em Angola.',
        features: [
          'Fundado em 2009',
          '15 anos de experiência',
          'Vinculado ao Ministério da Agricultura',
          'Atuação em todo território nacional'
        ],
        status: 'completed'
      }
    ],
    image: {
      url: 'assets/hero/pessoas-africanas-colhendo-legumes.jpg',
      alt: 'Agricultores angolanos em atividade rural'
    },
    stats: [
      { number: '15', label: 'Anos de Experiência' },
      { number: '18', label: 'Províncias Atendidas' },
      { number: '50.000+', label: 'Agricultores Beneficiados' },
      { number: '250+', label: 'Projetos Realizados' }
    ]
  };

  activeInitiative: number = 1;
  parallaxOffset = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.parallaxOffset = window.pageYOffset * 0.3;
  }

  setActiveInitiative(initiativeId: number) {
    this.activeInitiative = initiativeId;
  }

  getStatusBadge(status: string): string {
    const statusMap: { [key: string]: string } = {
      'active': 'Ativo',
      'completed': 'Concluído',
      'planned': 'Planejado'
    };
    return statusMap[status] || status;
  }

  getStatusColor(status: string): string {
    const colorMap: { [key: string]: string } = {
      'active': 'green',
      'completed': 'blue',
      'planned': 'gray'
    };
    return colorMap[status] || 'gray';
  }
}
