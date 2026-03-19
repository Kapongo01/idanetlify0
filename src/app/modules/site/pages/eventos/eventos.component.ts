
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Palestrante {
  nome: string;
  cargo: string;
  empresa: string;
  foto: string;
}

interface ProgramaItem {
  hora: string;
  titulo: string;
  palestrante?: string;
}

interface Evento {
  id: number;
  titulo: string;
  descricao: string;
  descricaoCompleta: string;
  dataInicio: Date;
  dataFim: Date;
  local: string;
  online: boolean;
  categoria: string;
  status: string;
  organizador: string;
  investimento: string;
  inscritos: number;
  vagas: number;
  inscrito: boolean;
  imagem: string;
  galeria: string[];
  linkEvento?: string;
  programa: ProgramaItem[];
  palestrantes: Palestrante[];
  parceiros: string[];
}

interface DiaCalendario {
  data: Date;
  doMes: boolean;
  hoje: boolean;
  eventos: Evento[];
}

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.scss' // styleUrl: './eventos.component.scss'
})
export class EventosComponent implements OnInit {
  eventos: Evento[] = [];
  eventosFiltrados: Evento[] = [];
  selectedEvent: Evento | null = null;
  vistaCalendario: boolean = false;

  // Filtros
  searchTerm: string = '';
  selectedCategory: string = 'all';
  selectedStatus: string = 'all';
  selectedLocation: string = 'all';
  sortBy: string = 'proximos';

  // Calendário
  mesAtual: Date = new Date();
  hoje: Date = new Date();
  diasSemana: string[] = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  diasCalendario: DiaCalendario[] = [];

  locations: string[] = ['Luanda', 'Huambo', 'Benguela', 'Lobito', 'Lubango', 'Online'];

  ngOnInit() {
    this.carregarEventos();
    this.gerarCalendario();
  }

  carregarEventos() {
    // Dados mockados seguindo o mesmo padrão do template
    this.eventos = [
      {
        id: 1,
        titulo: 'Feira Nacional do Agronegócio 2024',
        descricao: 'Maior feira de agronegócio do país com expositores de todo Brasil e Angola.',
        descricaoCompleta: 'A Feira Nacional do Agronegócio reúne os principais players do setor, com palestras técnicas, demonstrações de equipamentos e oportunidades de negócios. Evento imperdível para profissionais do sector.',
        dataInicio: new Date('2024-02-15T08:00:00'),
        dataFim: new Date('2024-02-18T18:00:00'),
        local: 'Centro de Convenções de Luanda',
        online: false,
        categoria: 'feira',
        status: 'proximo',
        organizador: 'Associação Angolana do Agronegócio',
        investimento: 'Entrada Gratuita',
        inscritos: 245,
        vagas: 1000,
        inscrito: false,
        imagem: 'assets/hero/IMG-.jpg',
        galeria: [],
        linkEvento: 'https://exemplo.com/feira-agro',
        programa: [
          { hora: '08:00', titulo: 'Credenciamento e Abertura', palestrante: 'Organização' },
          { hora: '09:00', titulo: 'Painel: Futuro do Agronegócio', palestrante: 'Especialistas' },
          { hora: '14:00', titulo: 'Demonstração de Equipamentos', palestrante: 'Fabricantes' }
        ],
        palestrantes: [
          {
            nome: 'Dr. João Silva',
            cargo: 'Especialista em Agricultura',
            empresa: 'Ministério da Agricultura',
            foto: '/assets/images/palestrante1.jpg'
          }
        ],
        parceiros: ['Ministério da Agricultura', 'Banco de Fomento', 'Associação de Agricultores']
      },
      {
        id: 2,
        titulo: 'Workshop de Agricultura de Precisão',
        descricao: 'Curso prático sobre tecnologias de agricultura de precisão e drones agrícolas.',
        descricaoCompleta: 'Workshop intensivo com práticas de campo sobre mapeamento de produtividade, piloto automático e aplicação localizada de insumos. Inclui demonstração de drones agrícolas.',
        dataInicio: new Date('2024-01-25T09:00:00'),
        dataFim: new Date('2024-01-25T17:00:00'),
        local: 'Fazenda Experimental do Huambo',
        online: false,
        categoria: 'workshop',
        status: 'proximo',
        organizador: 'Embrapa e Ministério da Agricultura',
        investimento: 'Akwanzas 15.000',
        inscritos: 32,
        vagas: 40,
        inscrito: true,
        imagem: 'assets/galeria/fotos/workshop/fertilizantes-e-agrominerais.jpg',
        galeria: [],
        programa: [
          { hora: '09:00', titulo: 'Introdução à Agricultura de Precisão', palestrante: 'Eng. Maria Santos' },
          { hora: '11:00', titulo: 'Prática com Drones', palestrante: 'Técnico Especializado' },
          { hora: '14:00', titulo: 'Análise de Dados', palestrante: 'Dr. Carlos Oliveira' }
        ],
        palestrantes: [
          {
            nome: 'Eng. Maria Santos',
            cargo: 'Especialista em Agricultura Digital',
            empresa: 'Embrapa',
            foto: '/assets/images/palestrante2.jpg'
          }
        ],
        parceiros: ['Embrapa', 'Universidade Agostinho Neto']
      },
      {
        id: 3,
        titulo: 'Congresso Online de Sustentabilidade Agrícola',
        descricao: 'Discussões sobre práticas sustentáveis no agronegócio angolano.',
        descricaoCompleta: 'Evento online com especialistas nacionais e internacionais discutindo as melhores práticas de sustentabilidade na agricultura moderna.',
        dataInicio: new Date('2024-01-20T14:00:00'),
        dataFim: new Date('2024-01-20T18:00:00'),
        local: '',
        online: true,
        categoria: 'congresso',
        status: 'realizado',
        organizador: 'Instituto de Sustentabilidade Agrícola',
        investimento: 'Gratuito',
        inscritos: 156,
        vagas: 500,
        inscrito: false,
        imagem: '/assets/eventos/congresso.jpg',
        galeria: [],
        linkEvento: 'https://exemplo.com/congresso-sustentabilidade',
        programa: [],
        palestrantes: [],
        parceiros: ['FAO', 'Programa das Nações Unidas']
      },
      {
        id: 4,
        titulo: 'Dia de Campo - Cultivo do Café',
        descricao: 'Demonstração prática de técnicas modernas de cultivo do café.',
        descricaoCompleta: 'Evento prático em campo com demonstração de técnicas de plantio, manejo e colheita do café. Inclui degustação e análise de qualidade.',
        dataInicio: new Date('2024-02-10T07:00:00'),
        dataFim: new Date('2024-02-10T12:00:00'),
        local: 'Fazenda Santa Bárbara, Huíla',
        online: false,
        categoria: 'dia-campo',
        status: 'proximo',
        organizador: 'Associação de Cafeicultores',
        investimento: 'Akwanzas 5.000',
        inscritos: 28,
        vagas: 50,
        inscrito: false,
        imagem: '/assets/galeria/fotos/workshop/cafecuanzanorte.jpeg',
        galeria: [],
        programa: [
          { hora: '07:00', titulo: 'Recepção e Café da Manhã' },
          { hora: '08:00', titulo: 'Tour pela Plantação' },
          { hora: '10:00', titulo: 'Demonstração de Colheita' },
          { hora: '11:00', titulo: 'Degustação e Encerramento' }
        ],
        palestrantes: [],
        parceiros: ['Associação de Cafeicultores', 'Governo Provincial']
      }
    ];

    this.aplicarFiltros();
  }

  aplicarFiltros() {
    let filtered = this.eventos.filter(evento => {
      const matchesSearch = !this.searchTerm ||
        evento.titulo.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        evento.descricao.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        evento.organizador.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchesCategory = this.selectedCategory === 'all' ||
        evento.categoria === this.selectedCategory;

      const matchesStatus = this.selectedStatus === 'all' ||
        evento.status === this.selectedStatus;

      const matchesLocation = this.selectedLocation === 'all' ||
        (evento.online && this.selectedLocation === 'Online') ||
        (!evento.online && evento.local.includes(this.selectedLocation));

      return matchesSearch && matchesCategory && matchesStatus && matchesLocation;
    });

    // Ordenar
    switch (this.sortBy) {
      case 'proximos':
        filtered.sort((a, b) => a.dataInicio.getTime() - b.dataInicio.getTime());
        break;
      case 'recentes':
        filtered.sort((a, b) => b.dataInicio.getTime() - a.dataInicio.getTime());
        break;
      case 'titulo':
        filtered.sort((a, b) => a.titulo.localeCompare(b.titulo));
        break;
      case 'participantes':
        filtered.sort((a, b) => b.inscritos - a.inscritos);
        break;
    }

    this.eventosFiltrados = filtered;

    if (this.vistaCalendario) {
      this.gerarCalendario();
    }
  }

  clearFilters() {
    this.searchTerm = '';
    this.selectedCategory = 'all';
    this.selectedStatus = 'all';
    this.selectedLocation = 'all';
    this.sortBy = 'proximos';
    this.aplicarFiltros();
  }

  // Métodos auxiliares
getCategoryIcon(categoria: string): string {
  const icons: { [key: string]: string } = {
    'feira': 'fa-trophy',
    'congresso': 'fa-graduation-cap',
    'workshop': 'fa-screwdriver-wrench',
    'curso': 'fa-book',
    'dia-campo': 'fa-seedling',
    'seminario': 'fa-comments'
  };
  return 'fas ' + (icons[categoria] || 'fa-bullseye');
}

  getCategoryLabel(categoria: string): string {
    const labels: { [key: string]: string } = {
      'feira': 'Feira',
      'congresso': 'Congresso',
      'workshop': 'Workshop',
      'curso': 'Curso',
      'dia-campo': 'Dia de Campo',
      'seminario': 'Seminário'
    };
    return labels[categoria] || 'Evento';
  }

  getStatusIcon(status: string): string {
    const icons: { [key: string]: string } = {
      'proximo': 'fa-clock',
      'decorrer': 'fa-bullseye',
      'realizado': 'fa-circle-check',
      'cancelado': 'fa-circle-xmark'
    };
    return 'fas ' + (icons[status] || 'fa-calendar-day');
  }

  getStatusLabel(status: string): string {
    const labels: { [key: string]: string } = {
      'proximo': 'Próximo',
      'decorrer': 'Em Curso',
      'realizado': 'Realizado',
      'cancelado': 'Cancelado'
    };
    return labels[status] || 'Agendado';
  }

  getStatusColor(status: string): string {
    const colors: { [key: string]: string } = {
      'proximo': 'green',
      'decorrer': 'blue',
      'realizado': 'gray',
      'cancelado': 'red'
    };
    return colors[status] || 'gray';
  }

  getRegistrationPercentage(evento: Evento): number {
    return evento.vagas > 0 ? (evento.inscritos / evento.vagas) * 100 : 0;
  }

 getActionButtonInfo(evento: Evento) {
  if (evento.inscrito) return { icon: 'fa-circle-check', label: 'Inscrito', color: 'green' };
  if (evento.inscritos >= evento.vagas) return { icon: 'fa-circle-xmark', label: 'Lotado', color: 'red' };
  if (evento.status === 'proximo') return { icon: 'fa-bullseye', label: 'Inscrever-se', color: 'blue' };
  if (evento.status === 'decorrer') return { icon: 'fa-bullseye', label: 'Participar', color: 'blue' };
  return { icon: 'fa-clipboard-list', label: 'Ver Detalhes', color: 'gray' };
}

  // Métodos de estatísticas
  contarProximosEventos(): number {
    const hoje = new Date();
    return this.eventos.filter(evento =>
      evento.status === 'proximo' && evento.dataInicio >= hoje
    ).length;
  }

  contarParticipantes(): number {
    return this.eventos.reduce((total, evento) => total + evento.inscritos, 0);
  }

  contarCidades(): number {
    const cidades = new Set(this.eventos
      .filter(evento => !evento.online)
      .map(evento => evento.local.split(',')[0].trim())
    );
    return cidades.size;
  }

  // Métodos do calendário
  alternarVista() {
    this.vistaCalendario = !this.vistaCalendario;
    if (this.vistaCalendario) {
      this.gerarCalendario();
    }
  }

  gerarCalendario() {
    this.diasCalendario = [];

    const primeiroDia = new Date(this.mesAtual.getFullYear(), this.mesAtual.getMonth(), 1);
    const ultimoDia = new Date(this.mesAtual.getFullYear(), this.mesAtual.getMonth() + 1, 0);

    // Dias do mês anterior
    const diaSemanaInicio = primeiroDia.getDay();
    for (let i = diaSemanaInicio - 1; i >= 0; i--) {
      const data = new Date(primeiroDia);
      data.setDate(data.getDate() - i - 1);
      this.diasCalendario.push({
        data,
        doMes: false,
        hoje: this.ehHoje(data),
        eventos: this.eventosDoDia(data)
      });
    }

    // Dias do mês atual
    for (let i = 1; i <= ultimoDia.getDate(); i++) {
      const data = new Date(this.mesAtual.getFullYear(), this.mesAtual.getMonth(), i);
      this.diasCalendario.push({
        data,
        doMes: true,
        hoje: this.ehHoje(data),
        eventos: this.eventosDoDia(data)
      });
    }

    // Dias do próximo mês
    const totalCells = 42; // 6 semanas
    const diasRestantes = totalCells - this.diasCalendario.length;
    for (let i = 1; i <= diasRestantes; i++) {
      const data = new Date(ultimoDia);
      data.setDate(data.getDate() + i);
      this.diasCalendario.push({
        data,
        doMes: false,
        hoje: this.ehHoje(data),
        eventos: this.eventosDoDia(data)
      });
    }
  }

  eventosDoDia(data: Date): Evento[] {
    return this.eventosFiltrados.filter(evento => {
      const dataEvento = new Date(evento.dataInicio);
      return dataEvento.getDate() === data.getDate() &&
        dataEvento.getMonth() === data.getMonth() &&
        dataEvento.getFullYear() === data.getFullYear();
    });
  }

  ehHoje(data: Date): boolean {
    const hoje = new Date();
    return data.getDate() === hoje.getDate() &&
      data.getMonth() === hoje.getMonth() &&
      data.getFullYear() === hoje.getFullYear();
  }

  mesAnterior() {
    this.mesAtual = new Date(this.mesAtual.getFullYear(), this.mesAtual.getMonth() - 1, 1);
    this.gerarCalendario();
  }

  proximoMes() {
    this.mesAtual = new Date(this.mesAtual.getFullYear(), this.mesAtual.getMonth() + 1, 1);
    this.gerarCalendario();
  }

  // Modal methods
  openEventModal(evento: Evento) {
    this.selectedEvent = evento;
  }

  closeEventModal() {
    this.selectedEvent = null;
  }

  inscreverEvento(evento: Evento) {
    if (!evento.inscrito && evento.inscritos < evento.vagas) {
      evento.inscrito = true;
      evento.inscritos++;

      // Em produção, enviar para API
      console.log('Inscrição confirmada para:', evento.titulo);
      alert('Inscrição realizada com sucesso!');
    }
  }

  acessarEvento(evento: Evento) {
    if (evento.linkEvento) {
      window.open(evento.linkEvento, '_blank');
    }
  }

  compartilharEvento(evento: Evento) {
    if (navigator.share) {
      navigator.share({
        title: evento.titulo,
        text: evento.descricao,
        url: window.location.href + '/evento/' + evento.id
      });
    } else {
      navigator.clipboard.writeText(window.location.href + '/evento/' + evento.id);
      alert('Link do evento copiado para a área de transferência!');
    }
  }

  sugerirEvento() {
    // Implementar lógica para sugerir evento
    alert('Funcionalidade de sugestão de evento em desenvolvimento!');
  }

  exportarCalendario() {
    // Implementar exportação para calendário (ICS)
    console.log('Exportar calendário de eventos');
    alert('Funcionalidade de exportação de calendário em desenvolvimento!');
  }
}
