import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type ProgramCategory = 'all' | 'development' | 'training' | 'infrastructure' | 'sustainability' | 'research';
type ProgramStatus = 'active' | 'completed' | 'upcoming';

interface Program {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: ProgramCategory;
  status: ProgramStatus;
  duration: string;
  budget: string;
  beneficiaries: string;
  coverage: string[];
  objectives: string[];
  results: string[];
  requirements: string[];
  partners: string[];
  image: string;
  icon: string;
  progress?: number;
  startDate: string;
  endDate: string;
}

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent {



  // Dados da página
  pageData = {
    hero: {
      title: 'Programas Estruturantes do IDA',
      subtitle: 'Iniciativas estratégicas para o desenvolvimento sustentável do sector agrário angolano',
      backgroundImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80'
    },
    stats: {
      title: 'Impacto dos Nossos Programas',
      items: [
        { number: '15+', label: 'Programas Activos' },
        { number: '120K+', label: 'Agricultores Beneficiados' },
        { number: '18', label: 'Províncias Cobertas' },
        { number: 'KZ 1.8B', label: 'Investimento Anual' }
      ]
    }
  };

  // Filtros e pesquisa
  searchTerm: string = '';
  selectedCategory: ProgramCategory = 'all';
  selectedStatus: ProgramStatus | 'all' = 'all';
  sortBy: string = 'popular';

  // Programas
  programs: Program[] = [
    {
      id: 1,
      title: 'Programa de Agricultura Familiar',
      shortDescription: 'Apoio integral às famílias agricultoras com assistência técnica, financiamento e acesso a mercados.',
      fullDescription: 'Programa abrangente de apoio à agricultura familiar que combina assistência técnica especializada, crédito agrícola subsidiado, acesso a insumos de qualidade e conexão com mercados consumidores. Focado em aumentar a produtividade e rendimento das famílias rurais.',
      category: 'development',
      status: 'active',
      duration: '5 anos',
      budget: 'KZ 500.000.000',
      beneficiaries: '50.000 famílias',
      coverage: ['Todas as províncias', 'Ênfase em zonas rurais'],
      objectives: [
        'Aumentar produtividade em 40%',
        'Garantir segurança alimentar familiar',
        'Diversificar produção agrícola',
        'Aumentar rendimento familiar em 60%'
      ],
      results: [
        '45.000 famílias já beneficiadas',
        '35% de aumento médio na produtividade',
        '2.500 associações formadas',
        'KZ 120M em crédito concedido'
      ],
      requirements: [
        'Ser agricultor familiar',
        'Ter propriedade até 10 hectares',
        'Participar em formações',
        'Implementar boas práticas agrícolas'
      ],
      partners: ['MINAGRIF', 'BDA', 'Associações de Produtores'],
      image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      icon: 'fa-solid fa-people-group',
      progress: 85,
      startDate: '2022-01-01',
      endDate: '2026-12-31'
    },
    {
      id: 2,
      title: 'Programa de Extensão Rural',
      shortDescription: 'Assistência técnica directa às comunidades agrícolas com tecnologias adaptadas às regiões.',
      fullDescription: 'Rede de extensionistas rurais que presta assistência técnica personalizada às comunidades agrícolas, transferindo tecnologias adaptadas e promovendo boas práticas agrícolas sustentáveis.',
      category: 'training',
      status: 'active',
      duration: '4 anos',
      budget: 'KZ 200.000.000',
      beneficiaries: '120.000 agricultores',
      coverage: ['18 províncias', '500 comunidades'],
      objectives: [
        'Capacitar 120.000 agricultores',
        'Implementar 500 campos demonstrativos',
        'Formar 1.000 extensionistas',
        'Transferir 50 tecnologias adaptadas'
      ],
      results: [
        '85.000 agricultores capacitados',
        '350 campos demonstrativos activos',
        '650 extensionistas formados',
        '40 tecnologias transferidas'
      ],
      requirements: [
        'Comunidade organizada',
        'Disponibilidade para formação',
        'Área para campo demonstrativo',
        'Compromisso com sustentabilidade'
      ],
      partners: ['INIA', 'Universidades', 'ONGs Locais'],
      image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      icon: 'fa-solid fa-wheat-awn',
      progress: 70,
      startDate: '2023-03-01',
      endDate: '2026-12-31'
    },
    {
      id: 3,
      title: 'Programa de Segurança Alimentar',
      shortDescription: 'Garantia do acesso regular a alimentos nutritivos para todas as famílias rurais.',
      fullDescription: 'Programa integrado que combina aumento da produção, diversificação agrícola, nutrição familiar e estoques estratégicos para garantir segurança alimentar nas comunidades rurais.',
      category: 'sustainability',
      status: 'active',
      duration: '5 anos',
      budget: 'KZ 350.000.000',
      beneficiaries: '300.000 pessoas',
      coverage: ['Províncias com insegurança alimentar', 'Zonas semiáridas'],
      objectives: [
        'Reduzir insegurança alimentar em 60%',
        'Aumentar diversificação alimentar',
        'Criar 100 bancos de sementes',
        'Formar em nutrição familiar'
      ],
      results: [
        '45% de redução na insegurança alimentar',
        '80 bancos de sementes criados',
        '50.000 famílias com hortas diversificadas',
        '60.000 pessoas formadas em nutrição'
      ],
      requirements: [
        'Comunidade com indicadores de insegurança alimentar',
        'Compromisso com diversificação',
        'Participação em formações',
        'Área para horta familiar'
      ],
      partners: ['PAM', 'FAO', 'MINSA'],
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      icon: 'fa-solid fa-shield-halved',
      progress: 65,
      startDate: '2022-06-01',
      endDate: '2026-12-31'
    },
    {
      id: 4,
      title: 'Programa de Infraestruturas Rurais',
      shortDescription: 'Desenvolvimento de infraestruturas críticas para o desenvolvimento agrícola.',
      fullDescription: 'Programa de construção e reabilitação de infraestruturas essenciais para a agricultura, incluindo sistemas de irrigação, estradas rurais, armazenamento e unidades de processamento.',
      category: 'infrastructure',
      status: 'active',
      duration: '6 anos',
      budget: 'KZ 800.000.000',
      beneficiaries: '500 comunidades',
      coverage: ['Todas as províncias', 'Prioridade zonas produtoras'],
      objectives: [
        'Construir 500km de estradas rurais',
        'Instalar 200 sistemas de irrigação',
        'Construir 100 unidades de armazenamento',
        'Reabilitar 50 mercados rurais'
      ],
      results: [
        '350km de estradas construídas',
        '120 sistemas de irrigação instalados',
        '65 unidades de armazenamento',
        '30 mercados rurais reabilitados'
      ],
      requirements: [
        'Comunidade com potencial produtivo',
        'Acesso a recursos hídricos',
        'Compromisso de manutenção',
        'Contrapartida comunitária'
      ],
      partners: ['MINOT', 'Governos Provinciais', 'Comunidades'],
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      icon: 'fa-solid fa-building',
      progress: 55,
      startDate: '2021-01-01',
      endDate: '2026-12-31'
    },
    {
      id: 5,
      title: 'Programa de Capacitação Técnica',
      shortDescription: 'Formação especializada para técnicos agrícolas e líderes comunitários.',
      fullDescription: 'Programa abrangente de formação técnica e gerencial para profissionais do sector agrícola, incluindo técnicos extensionistas, gestores de associações e jovens agricultores.',
      category: 'training',
      status: 'active',
      duration: '4 anos',
      budget: 'KZ 120.000.000',
      beneficiaries: '5.000 técnicos',
      coverage: ['Centros regionais', 'Formação descentralizada'],
      objectives: [
        'Formar 5.000 técnicos agrícolas',
        'Certificar 80% dos participantes',
        'Criar rede de especialistas',
        'Desenvolver 20 manuais técnicos'
      ],
      results: [
        '3.200 técnicos formados',
        '75% de taxa de certificação',
        '15 manuais desenvolvidos',
        'Rede com 500 especialistas'
      ],
      requirements: [
        'Formação em áreas afins',
        'Experiência no sector agrícola',
        'Compromisso com desenvolvimento rural',
        'Disponibilidade para mobilidade'
      ],
      partners: ['Universidades', 'Escolas Agrárias', 'ONGs Internacionais'],
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      icon: 'fa-solid fa-graduation-cap',
      progress: 80,
      startDate: '2023-01-15',
      endDate: '2026-12-31'
    },
    {
      id: 6,
      title: 'Programa de Investigação Agrária',
      shortDescription: 'Pesquisa aplicada para desenvolvimento de tecnologias adaptadas ao contexto angolano.',
      fullDescription: 'Programa de investigação científica aplicada ao desenvolvimento de variedades adaptadas, técnicas de cultivo sustentáveis e soluções tecnológicas para os desafios do sector agrícola angolano.',
      category: 'research',
      status: 'active',
      duration: '5 anos',
      budget: 'KZ 180.000.000',
      beneficiaries: 'Todos os produtores',
      coverage: ['Centros de pesquisa', 'Campos experimentais'],
      objectives: [
        'Desenvolver 20 variedades adaptadas',
        'Publicar 50 artigos científicos',
        'Registar 10 patentes',
        'Transferir 30 tecnologias'
      ],
      results: [
        '12 variedades desenvolvidas',
        '35 artigos publicados',
        '5 patentes registadas',
        '18 tecnologias transferidas'
      ],
      requirements: [
        'Instituições de pesquisa',
        'Parcerias científicas',
        'Infraestrutura adequada',
        'Equipa multidisciplinar'
      ],
      partners: ['INIA', 'Universidades', 'Centros Internacionais'],
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      icon: 'fa-solid fa-flask',
      progress: 60,
      startDate: '2022-09-01',
      endDate: '2026-12-31'
    },
    {
      id: 7,
      title: 'Programa de Jovens no Agronegócio',
      shortDescription: 'Incentivo ao empreendedorismo agrícola entre os jovens angolanos.',
      fullDescription: 'Programa especializado para atrair e capacitar jovens para o agronegócio, oferecendo formação, mentoria, acesso a crédito e apoio à comercialização.',
      category: 'development',
      status: 'upcoming',
      duration: '3 anos',
      budget: 'KZ 90.000.000',
      beneficiaries: '10.000 jovens',
      coverage: ['Todo o território nacional', 'Foco em áreas urbanas e rurais'],
      objectives: [
        'Atrair 10.000 jovens para o agronegócio',
        'Criar 2.000 empresas jovens',
        'Gerar 5.000 empregos',
        'Fomentar inovação no sector'
      ],
      results: [],
      requirements: [
        'Idade entre 18-35 anos',
        'Ideia de negócio agrícola',
        'Disponibilidade para formação',
        'Compromisso com empreendedorismo'
      ],
      partners: ['INEFOP', 'Bancos Comerciais', 'Incubadoras'],
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      icon: 'fa-solid fa-rocket',
      startDate: '2024-09-01',
      endDate: '2027-08-31'
    },
    {
      id: 8,
      title: 'Programa de Agricultura Sustentável',
      shortDescription: 'Promoção de práticas agrícolas ambientalmente sustentáveis e economicamente viáveis.',
      fullDescription: 'Programa de transição para sistemas agrícolas sustentáveis que combinam produtividade, conservação ambiental e resiliência climática.',
      category: 'sustainability',
      status: 'completed',
      duration: '4 anos',
      budget: 'KZ 150.000.000',
      beneficiaries: '25.000 agricultores',
      coverage: ['Biomas diversos', 'Sistemas de produção variados'],
      objectives: [
        'Implementar práticas sustentáveis em 50.000 hectares',
        'Reduzir uso de agroquímicos em 40%',
        'Aumentar matéria orgânica do solo',
        'Capacitar 25.000 agricultores'
      ],
      results: [
        '45.000 hectares com práticas sustentáveis',
        '35% de redução no uso de agroquímicos',
        '20% de aumento na matéria orgânica',
        '25.000 agricultores capacitados'
      ],
      requirements: [
        'Propriedade com potencial de conversão',
        'Compromisso com práticas sustentáveis',
        'Participação em monitorização',
        'Acesso a assistência técnica'
      ],
      partners: ['GEF', 'PNUD', 'Organizações Ambientais'],
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      icon: 'fa-solid fa-leaf',
      progress: 100,
      startDate: '2019-01-01',
      endDate: '2022-12-31'
    }
  ];

  // Categorias disponíveis
  categories = [
    { value: 'all', label: 'Todas Categorias', icon: 'fa-regular fa-folder' },
    { value: 'development', label: 'Desenvolvimento', icon: 'fa-solid fa-rocket' },
    { value: 'training', label: 'Capacitação', icon: 'fa-solid fa-graduation-cap' },
    { value: 'infrastructure', label: 'Infraestrutura', icon: 'fa-solid fa-building' },
    { value: 'sustainability', label: 'Sustentabilidade', icon: 'fa-solid fa-leaf' },
    { value: 'research', label: 'Investigação', icon: 'fa-solid fa-flask' }
  ];

  // Estados disponíveis
  statuses = [
    { value: 'all', label: 'Todos Estados', icon: 'fa-solid fa-chart-column' },
    { value: 'active', label: 'Activos', icon: 'fa-solid fa-circle' },
    { value: 'completed', label: 'Concluídos', icon: 'fa-solid fa-check' },
    { value: 'upcoming', label: 'Em Breve', icon: 'fa-solid fa-calendar' }
  ];

  // Opções de ordenação
  sortOptions = [
    { value: 'popular', label: 'Mais Populares' },
    { value: 'newest', label: 'Mais Recentes' },
    { value: 'budget', label: 'Maior Orçamento' },
    { value: 'duration', label: 'Maior Duração' }
  ];

  // Programa seleccionado para modal
  selectedProgram: Program | null = null;

  // Get filtered programs
  get filteredPrograms() {
    let filtered = this.programs;

    // Filtro por pesquisa
    if (this.searchTerm) {
      filtered = filtered.filter(program =>
        program.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        program.shortDescription.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        program.beneficiaries.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    // Filtro por categoria
    if (this.selectedCategory !== 'all') {
      filtered = filtered.filter(program => program.category === this.selectedCategory);
    }

    // Filtro por estado
    if (this.selectedStatus !== 'all') {
      filtered = filtered.filter(program => program.status === this.selectedStatus);
    }

    // Ordenação
    filtered = this.sortPrograms(filtered);

    return filtered;
  }

  // Sort programs
  private sortPrograms(programs: Program[]): Program[] {
    switch (this.sortBy) {
      case 'newest':
        return programs.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
      case 'budget':
        return programs.sort((a, b) => this.parseBudget(b.budget) - this.parseBudget(a.budget));
      case 'duration':
        return programs.sort((a, b) => this.parseDuration(b.duration) - this.parseDuration(a.duration));
      case 'popular':
      default:
        return programs.sort((a, b) => this.parseBeneficiaries(b.beneficiaries) - this.parseBeneficiaries(a.beneficiaries));
    }
  }

  // Parse budget string to number
  private parseBudget(budget: string): number {
    const clean = budget.replace('KZ ', '').replace('.', '').replace(',', '.');
    return parseFloat(clean) || 0;
  }

  // Parse duration string to months
  private parseDuration(duration: string): number {
    const match = duration.match(/(\d+)\s+anos?/);
    return match ? parseInt(match[1]) * 12 : 0;
  }

  // Parse beneficiaries string to number
  private parseBeneficiaries(beneficiaries: string): number {
    const match = beneficiaries.match(/(\d+[.,]?\d*)/);
    return match ? parseFloat(match[1].replace('.', '').replace(',', '.')) : 0;
  }

  // Get status info
  getStatusInfo(status: ProgramStatus) {
    const statusMap = {
      'active': { label: 'Em Execução', color: 'green', icon: '🟢' },
      'completed': { label: 'Concluído', color: 'blue', icon: '✅' },
      'upcoming': { label: 'Em Breve', color: 'orange', icon: '<i class="fas fa-calendar-day"></i> Período' }
    };
    return statusMap[status];
  }

  // Get category info
  getCategoryInfo(category: ProgramCategory) {
    const categoryMap = {
      'development': { label: 'Desenvolvimento', color: 'purple', icon: '<i class="fas fa-rocket"></i>' },
      'training': { label: 'Capacitação', color: 'blue', icon: '🎓' },
      'infrastructure': { label: 'Infraestrutura', color: 'orange', icon: '🏗️' },
      'sustainability': { label: 'Sustentabilidade', color: 'green', icon: '🌿' },
      'research': { label: 'Investigação', color: 'red', icon: '🔬' },
      'all': { label: 'Todas', color: 'gray', icon: '📁' }
    };
    return categoryMap[category];
  }

  // Open program modal
  openProgramModal(program: Program) {
    this.selectedProgram = program;
  }

  // Close program modal
  closeProgramModal() {
    this.selectedProgram = null;
  }

  // Clear all filters
  clearFilters() {
    this.searchTerm = '';
    this.selectedCategory = 'all';
    this.selectedStatus = 'all';
    this.sortBy = 'popular';
  }

  // Apply to program
  applyToProgram(program: Program) {
    alert(`Candidatura ao programa "${program.title}" enviada com sucesso!`);
  }

}
