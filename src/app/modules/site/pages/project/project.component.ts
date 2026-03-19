import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type ProjectStatus = 'active' | 'completed' | 'upcoming';
type ProjectCategory = 'all' | 'infrastructure' | 'technology' | 'training' | 'sustainability' | 'research';

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  category: ProjectCategory;
  status: ProjectStatus;
  location: string;
  startDate: string;
  endDate: string;
  budget: string;
  beneficiaries: string;
  image: string;
  gallery: string[];
  objectives: string[];
  results: string[];
  partners: string[];
  progress: number;
}

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  // Dados da página
  pageData = {
    hero: {
      title: 'Projectos em Destaque',
      subtitle: 'Conheça as iniciativas que estão a transformar a agricultura angolana e a melhorar a vida das comunidades rurais',
      backgroundImage: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    stats: {
      title: 'Impacto dos Nossos Projectos',
      items: [
        { number: '45+', label: 'Projectos Activos' },
        { number: '120+', label: 'Comunidades Beneficiadas' },
        { number: '50K+', label: 'Famílias Impactadas' },
        { number: '50M', label: 'Investimento Total' }
      ]
    }
  };

  // Filtros e pesquisa
  searchTerm: string = '';
  selectedCategory: ProjectCategory = 'all';
  selectedStatus: ProjectStatus | 'all' = 'all';
  selectedLocation: string = 'all';
  sortBy: string = 'newest';

  // Projectos
  projects: Project[] = [
    {
      id: 1,
      title: 'Programa de Irrigação Comunitária - Huambo',
      description: 'Implementação de sistemas de irrigação modernos em comunidades rurais para garantir produção durante todo o ano.',
      fullDescription: 'Este projecto visa implementar sistemas de irrigação modernos e sustentáveis em 12 comunidades rurais da província do Huambo. Através de tecnologias de irrigação por gotejamento e aspersão, garantimos a produção agrícola durante todo o ano, mesmo em períodos de seca.',
      category: 'infrastructure',
      status: 'active',
      location: 'Huambo',
      startDate: '2023-01-15',
      endDate: '2024-12-31',
      budget: 'KZ 111.000.000',
      beneficiaries: '2.500 famílias',
      image: 'assets/hero/agricultura-regadio.jpg',
      gallery: [
        'https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      ],
      objectives: [
        'Garantir produção agrícola durante todo o ano',
        'Reduzir dependência das chuvas',
        'Aumentar produtividade em 40%',
        'Capacitar agricultores em técnicas de irrigação'
      ],
      results: [
        '300% de aumento na produção',
        '12 comunidades beneficiadas',
        '450 empregos criados',
        'Produção garantida durante seca'
      ],
      partners: ['Governo Provincial', 'FAO', 'Banco Mundial'],
      progress: 75
    },
    {
      id: 2,
      title: 'Centro de Formação Agrícola - Benguela',
      description: 'Centro especializado na formação de jovens agricultores em técnicas modernas e sustentáveis.',
      fullDescription: 'O Centro de Formação Agrícola de Benguela oferece cursos técnicos e práticos para jovens agricultores, focando em técnicas modernas de produção, gestão agrícola e sustentabilidade ambiental.',
      category: 'training',
      status: 'active',
      location: 'Benguela',
      startDate: '2023-03-01',
      endDate: '2025-02-28',
      budget: 'KZ 8.000.000',
      beneficiaries: '1.200 jovens',
      image: 'assets/hero/h2.jpeg',
      gallery: [],
      objectives: [
        'Formar 1.200 jovens agricultores',
        'Promover empreendedorismo rural',
        'Disseminar técnicas modernas',
        'Criar rede de jovens agricultores'
      ],
      results: [
        '85% taxa de empregabilidade',
        '15 cursos técnicos desenvolvidos',
        'Parcerias com 3 universidades',
        '100% dos formados com projectos'
      ],
      partners: ['MINAGRIF', 'Universidade Katyavala', 'Jovens Agrários'],
      progress: 60
    },
    {
      id: 3,
      title: 'Feiras do Produtor Rural - Luanda',
      description: 'Criação de feiras semanais para conexão directa entre produtores rurais e consumidores urbanos.',
      fullDescription: 'Projecto de comercialização directa que conecta produtores rurais aos mercados urbanos de Luanda, eliminando intermediários e garantindo melhores preços para os agricultores.',
      category: 'technology',
      status: 'completed',
      location: 'Luanda',
      startDate: '2022-06-01',
      endDate: '2023-11-30',
      budget: 'KZ 3.500.000',
      beneficiaries: '180 produtores',
      image: 'assets/hero/IMG-.jpg',
      gallery: [],
      objectives: [
        'Criar 50 feiras semanais',
        'Conectar 180 produtores ao mercado',
        'Aumentar rendimento dos agricultores',
        'Promover consumo de produtos locais'
      ],
      results: [
        '50 feiras realizadas',
        'R$ 2.5M em vendas directas',
        '180 produtores participantes',
        '15.000+ consumidores atendidos'
      ],
      partners: ['Câmara de Comércio', 'Associações de Produtores'],
      progress: 100
    },
    {
      id: 4,
      title: 'Projecto Sementes Resilientes',
      description: 'Desenvolvimento e distribuição de sementes adaptadas às condições climáticas de Angola.',
      fullDescription: 'Programa de pesquisa e desenvolvimento de variedades de sementes resistentes à seca e adaptadas às diferentes regiões climáticas de Angola.',
      category: 'research',
      status: 'active',
      location: 'Nacional',
      startDate: '2022-01-10',
      endDate: '2025-12-31',
      budget: 'KZ 12.000.000',
      beneficiaries: 'Todos produtores',
      image: 'assets/hero/_XL.jpg',
      gallery: [],
      objectives: [
        'Desenvolver 12 variedades resistentes',
        'Aumentar resistência à seca em 60%',
        'Distribuir para 45.000 hectares',
        'Criar banco de sementes nacional'
      ],
      results: [
        '12 variedades desenvolvidas',
        '60% maior resistência comprovada',
        '45.000 hectares plantados',
        'Parceria com 5 centros de pesquisa'
      ],
      partners: ['INIA', 'Embrapa', 'Universidades Nacionais'],
      progress: 80
    },
    {
      id: 5,
      title: 'Energia Solar para Agricultura - Huíla',
      description: 'Instalação de sistemas de energia solar para bombeamento de água e processamento agrícola.',
      fullDescription: 'Implementação de sistemas fotovoltaicos para fornecer energia limpa e renovável para actividades agrícolas em comunidades rurais da Huíla.',
      category: 'technology',
      status: 'upcoming',
      location: 'Huíla',
      startDate: '2024-06-01',
      endDate: '2026-11-30',
      budget: 'KZ 10.000.000',
      beneficiaries: 'Cooperativas rurais',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      gallery: [],
      objectives: [
        'Instalar 40 sistemas solares',
        'Garantir 100% energia renovável',
        'Reduzir custos energéticos em 70%',
        'Permitir operação 24 horas'
      ],
      results: [],
      partners: ['MINENERGIA', 'Empresas de Energia Solar'],
      progress: 0
    },
    {
      id: 6,
      title: 'Agroindústria Comunitária - Bié',
      description: 'Criação de unidades de processamento para agregar valor aos produtos agrícolas locais.',
      fullDescription: 'Desenvolvimento de unidades de processamento e transformação de produtos agrícolas para agregar valor e criar novas oportunidades de mercado.',
      category: 'infrastructure',
      status: 'active',
      location: 'Bié',
      startDate: '2023-08-15',
      endDate: '2025-02-28',
      budget: 'KZ 20.000.000',
      beneficiaries: 'Associações rurais',
      image: 'assets/hero/pessoas-africanas-colhendo-legumes.jpg',
      gallery: [],
      objectives: [
        'Construir 5 unidades de processamento',
        'Agregar 200% de valor aos produtos',
        'Criar 120 empregos directos',
        'Exportar para mercados regionais'
      ],
      results: [
        '3 unidades em operação',
        '150% de valor agregado alcançado',
        '80 empregos criados',
        'Primeiras exportações realizadas'
      ],
      partners: ['PRODESI', 'Investidores Privados'],
      progress: 45
    }
  ];

  // Categorias disponíveis
categories = [
  { value: 'all', label: 'Todas Categorias', icon: 'faFolder' },
  { value: 'infrastructure', label: 'Infraestrutura', icon: 'faBuilding' },
  { value: 'technology', label: 'Tecnologia', icon: 'faLaptop' },
  { value: 'training', label: 'Capacitação', icon: 'faGraduationCap' },
  { value: 'sustainability', label: 'Sustentabilidade', icon: 'faLeaf' },
  { value: 'research', label: 'Investigação', icon: 'faMicroscope' }
];

  // Estados disponíveis
statuses = [
  { value: 'all', label: 'Todos Estados', icon: 'faChartBar' },
  { value: 'active', label: 'Em Execução', icon: 'faCircle' },
  { value: 'completed', label: 'Concluídos', icon: 'faCircleCheck' },
  { value: 'upcoming', label: 'Em Breve', icon: 'faCalendarDay' }
];

  // Localizações disponíveis
  locations = [
    { value: 'all', label: 'Todas Localizações' },
    { value: 'Luanda', label: 'Luanda' },
    { value: 'Huambo', label: 'Huambo' },
    { value: 'Benguela', label: 'Benguela' },
    { value: 'Huíla', label: 'Huíla' },
    { value: 'Bié', label: 'Bié' },
    { value: 'Nacional', label: 'Nacional' }
  ];

  // Ordenação
  sortOptions = [
    { value: 'newest', label: 'Mais Recentes' },
    { value: 'oldest', label: 'Mais Antigos' },
    { value: 'progress', label: 'Maior Progresso' },
    { value: 'budget', label: 'Maior Orçamento' }
  ];

  // Projecto seleccionado para modal
  selectedProject: Project | null = null;

  // Get filtered projects
  get filteredProjects() {
    let filtered = this.projects;

    // Filtro por pesquisa
    if (this.searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        project.location.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    // Filtro por categoria
    if (this.selectedCategory !== 'all') {
      filtered = filtered.filter(project => project.category === this.selectedCategory);
    }

    // Filtro por estado
    if (this.selectedStatus !== 'all') {
      filtered = filtered.filter(project => project.status === this.selectedStatus);
    }

    // Filtro por localização
    if (this.selectedLocation !== 'all') {
      filtered = filtered.filter(project => project.location === this.selectedLocation);
    }

    // Ordenação
    filtered = this.sortProjects(filtered);

    return filtered;
  }

  // Sort projects
  private sortProjects(projects: Project[]): Project[] {
    switch (this.sortBy) {
      case 'newest':
        return projects.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
      case 'oldest':
        return projects.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
      case 'progress':
        return projects.sort((a, b) => b.progress - a.progress);
      case 'budget':
        return projects.sort((a, b) => this.parseBudget(b.budget) - this.parseBudget(a.budget));
      default:
        return projects;
    }
  }

  // Parse budget string to number
  private parseBudget(budget: string): number {
    const clean = budget.replace('R$ ', '').replace('.', '').replace(',', '.');
    return parseFloat(clean) || 0;
  }

  // Get status info
  getStatusInfo(status: ProjectStatus) {
    const statusMap = {
      'active': { label: 'Em Execução', color: 'green', icon: 'fas fa-circle' },
      'completed': { label: 'Concluído', color: 'blue', icon: 'fas fa-circle-check' },
      'upcoming': { label: 'Em Breve', color: 'orange', icon: 'fas fa-calendar-day' }
    };
    return statusMap[status];
  }

  // Get category info
getCategoryInfo(category: ProjectCategory) {
  const categoryMap = {
    'infrastructure': { label: 'Infraestrutura', color: 'purple', icon: 'fa-building' },
    'technology': { label: 'Tecnologia', color: 'blue', icon: 'fa-laptop' },
    'training': { label: 'Capacitação', color: 'green', icon: 'fa-graduation-cap' },
    'sustainability': { label: 'Sustentabilidade', color: 'teal', icon: 'fa-leaf' },
    'research': { label: 'Investigação', color: 'orange', icon: 'fa-microscope' },
    'all': { label: 'Todas', color: 'gray', icon: 'fa-folder' }
  };
  return categoryMap[category];
}

  // Open project modal
  openProjectModal(project: Project) {
    this.selectedProject = project;
  }

  // Close project modal
  closeProjectModal() {
    this.selectedProject = null;
  }

  // Clear all filters
  clearFilters() {
    this.searchTerm = '';
    this.selectedCategory = 'all';
    this.selectedStatus = 'all';
    this.selectedLocation = 'all';
    this.sortBy = 'newest';
  }
}
