import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MissionItem {
  id: number;
  icon: string;
  title: string;
  description: string;
  color: string;
}

interface ValueItem {
  id: number;
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent {
  missionData = {
    title: 'Nossa Missão no Instituto de Desenvolvimento Agrário',
    mission: 'Promover o desenvolvimento sustentável do setor agrário, fortalecendo a agricultura familiar, modernizando a produção rural e garantindo segurança alimentar, através de políticas públicas eficientes e programas de capacitação que elevem a qualidade de vida no campo.',
    vision: 'Ser referência nacional em desenvolvimento agrário sustentável, transformando o campo em um espaço de oportunidades, inovação e prosperidade para as atuais e futuras gerações.',
    pillars: [
      {
        id: 1,
        icon: '<i class="fas fa-seedling"></i>',
        title: 'Sustentabilidade',
        description: 'Implementar práticas agrícolas que preservem os recursos naturais e garantam a viabilidade econômica das propriedades rurais.',
        color: 'green'
      },
      {
        id: 2,
        icon: '<i class="fas fa-user-farmer"></i>',
        title: 'Agricultura Familiar',
        description: 'Fortalecer a base da produção agrícola nacional através do apoio técnico e financeiro às famílias rurais.',
        color: 'blue'
      },
      {
        id: 3,
        icon: '<i class="fas fa-university"></i>',
        title: 'Governança',
        description: 'Estabelecer processos transparentes e participativos na gestão das políticas públicas para o campo.',
        color: 'purple'
      },
      {
        id: 4,
        icon: '<i class="fas fa-rocket"></i>',
        title: 'Inovação',
        description: 'Incorporar tecnologias e conhecimentos modernos para aumentar a produtividade e competitividade rural.',
        color: 'orange'
      }
    ],
    values: [
      {
        id: 1,
        icon: '<i class="fas fa-handshake"></i>',
        title: 'Transparência',
        description: 'Atuamos com honestidade e clareza em todas as nossas ações e processos.'
      },
      {
        id: 2,
        icon: '🌍',
        title: 'Sustentabilidade',
        description: 'Buscamos o equilíbrio entre desenvolvimento econômico, social e ambiental.'
      },
      {
        id: 3,
        icon: '<i class="fas fa-dumbbell"></i>',
        title: 'Equidade',
        description: 'Promovemos igualdade de oportunidades para todos os agricultores.'
      },
      {
        id: 4,
        icon: '<i class="fas fa-bullseye"></i>',
        title: 'Excelência',
        description: 'Comprometemo-nos com a qualidade e eficiência em todos os serviços prestados.'
      },
      {
        id: 5,
        icon: '<i class="fas fa-heart"></i>',
        title: 'Compromisso Social',
        description: 'Trabalhamos para melhorar a qualidade de vida das comunidades rurais.'
      },
      {
        id: 6,
        icon: '<i class="fas fa-sync-alt"></i>',
        title: 'Inovação Contínua',
        description: 'Buscamos constantemente novas soluções para os desafios do campo.'
      }
    ],
    achievements: [
      { number: '50.000+', label: 'Famílias Beneficiadas' },
      { number: '1.200+', label: 'Comunidades Atendidas' },
      { number: 'R$ 2,5 Bi', label: 'Investidos no Campo' },
      { number: '85%', label: 'Aumento na Produtividade' }
    ]
  };

  activePillar: number | null = null;

  setActivePillar(pillarId: number | null) {
    this.activePillar = pillarId;
  }
}

