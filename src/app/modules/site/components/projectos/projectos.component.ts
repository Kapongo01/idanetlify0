import { Component,  } from '@angular/core';
import { CommonModule } from '@angular/common';

type ProjectStatus = 'active' | 'completed' | 'upcoming';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  impact: string[];
  location: string;
  beneficiaries: string;
  duration: string;
  status: ProjectStatus;
  image: string;
}

@Component({
  selector: 'app-projectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projectos.component.html',
  styleUrls: ['./projectos.component.scss']
})
export class ProjectosComponent {

  // ---------------------------
  // DADOS DE PROJETOS
  // ---------------------------
  projectsData = {
    title: 'Projectos Que Impactam',
    subtitle: 'Conheça as iniciativas que estão transformando a realidade do campo angolano e melhorando a vida das comunidades rurais.',
    filters: ['Todos', 'Activos', 'Concluídos', 'Em Breve'],
    projects: [
      {
        id: 1,
        title: 'Programa de Irrigação Comunitária',
        category: 'Infraestrutura',
        description: 'Implementação de sistemas de irrigação modernos em comunidades rurais para garantir produção agrícola durante todo o ano.',
        impact: [
          'Aumento de 300% na produção',
          '12 comunidades beneficiadas',
          'Criação de 450 empregos',
          'Produção durante seca'
        ],
        location: 'Província do Huambo',
        beneficiaries: '2.500 famílias',
        duration: '24 meses',
        status: 'active' as ProjectStatus,
        image: 'assets/hero/agricultura-regadio.jpg'
      },
      {
        id: 2,
        title: 'Centro de Formação Agrícola',
        category: 'Capacitação',
        description: 'Centro especializado na formação de jovens agricultores em técnicas modernas e sustentáveis de produção.',
        impact: [
          '1.200 jovens capacitados',
          '85% taxa de empregabilidade',
          '15 cursos técnicos',
          'Parcerias com universidades'
        ],
        location: 'Província de Benguela',
        beneficiaries: 'Jovens 18-35 anos',
        duration: '36 meses',
        status: 'active' as ProjectStatus,
        image: 'assets/hero/h2.jpeg'
      },
      {
        id: 3,
        title: 'Feiras do Produtor Rural',
        category: 'Comercialização',
        description: 'Criação de feiras semanais para conexão directa entre produtores rurais e consumidores urbanos.',
        impact: [
          '50 feiras realizadas',
          'R$ 2.5M em vendas',
          '180 produtores participantes',
          '15.000+ consumidores'
        ],
        location: 'Luanda e Huambo',
        beneficiaries: 'Agricultores familiares',
        duration: '18 meses',
        status: 'completed' as ProjectStatus,
        image: 'assets/hero/IMG-.jpg'
      },
      {
        id: 4,
        title: 'Projecto Sementes Resilientes',
        category: 'Pesquisa',
        description: 'Desenvolvimento e distribuição de sementes adaptadas às condições climáticas de Angola.',
        impact: [
          '12 variedades desenvolvidas',
          '60% maior resistência',
          '45.000 hectares plantados',
          'Parceria com pesquisa'
        ],
        location: 'Nacional',
        beneficiaries: 'Todos produtores',
        duration: '48 meses',
        status: 'active' as ProjectStatus,
        image: 'assets/hero/tete.jpg'
      },
      {
        id: 5,
        title: 'Energia Solar para Agricultura',
        category: 'Tecnologia',
        description: 'Instalação de sistemas de energia solar para bombeamento de água e processamento agrícola.',
        impact: [
          '40 sistemas instalados',
          '100% energia renovável',
          'Redução de 70% custos',
          '24h operação'
        ],
        location: 'Província da Huíla',
        beneficiaries: 'Cooperativas rurais',
        duration: '30 meses',
        status: 'upcoming' as ProjectStatus,
        image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80'
      },
      {
        id: 6,
        title: 'Agroindústria Comunitária',
        category: 'Processamento',
        description: 'Criação de unidades de processamento para agregar valor aos produtos agrícolas locais.',
        impact: [
          '5 unidades construídas',
          'Valor agregado 200%',
          'Criação de 120 empregos',
          'Exportação para mercados'
        ],
        location: 'Província do Bié',
        beneficiaries: 'Associações rurais',
        duration: '42 meses',
        status: 'active' as ProjectStatus,
        image: 'assets/hero/_XL.jpg'
      }
    ]
  };

  activeFilter: string = 'Todos';
  selectedProject: Project | null = null;

  // ---------------------------
  // MÉTODOS DE FILTRO
  // ---------------------------
  setActiveFilter(filter: string) {
    this.activeFilter = filter;
  }

  selectProject(project: Project) {
    this.selectedProject = this.selectedProject?.id === project.id ? null : project;
  }

  get filteredProjects() {
    if (this.activeFilter === 'Todos') {
      return this.projectsData.projects;
    }

    const statusMap: { [key: string]: ProjectStatus } = {
      'Activos': 'active',
      'Concluídos': 'completed',
      'Em Breve': 'upcoming'
    };

    const status = statusMap[this.activeFilter];
    return this.projectsData.projects.filter(
      project => project.status === status
    );
  }

  getStatusText(status: ProjectStatus): string {
    const statusMap: { [key: string]: string } = {
      'active': 'Em Execução',
      'completed': 'Concluído',
      'upcoming': 'Em Breve'
    };
    return statusMap[status] || status;
  }

  getStatusColor(status: ProjectStatus): string {
    const colorMap: { [key: string]: string } = {
      'active': 'green',
      'completed': 'blue',
      'upcoming': 'orange'
    };
    return colorMap[status] || 'gray';
  }

 
}
