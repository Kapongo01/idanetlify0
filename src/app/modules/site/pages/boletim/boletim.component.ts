import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

interface Indicadores {
  cotacoes: number;
  previsoes: number;
  artigos: number;
}

interface Boletim {
  id: number;
  titulo: string;
  resumo: string;
  numeroEdicao: string;
  dataPublicacao: Date;
  periodicidade: string;
  status: string;
  imagem: string;
  arquivo: string;
  downloads: number;
  indicadores: Indicadores;
  destaques: string[];
  descricaoCompleta: string;
}

interface Inscricao {
  nome: string;
  email: string;
  periodicidade: string;
  interesses: string;
}

@Component({
  selector: 'app-boletim',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './boletim.component.html',
  styleUrl: './boletim.component.scss'
})
export class BoletimComponent implements OnInit {
  boletins: Boletim[] = [];
  boletinsFiltrados: Boletim[] = [];
  mostrarModalInscricao: boolean = false;

  // Filtros
  searchTerm: string = '';
  selectedPeriodicidade: string = 'all';
  selectedYear: string = 'all';
  selectedStatus: string = 'all';
  sortBy: string = 'recentes';

  years: number[] = [2024, 2023, 2022, 2021, 2020];
  totalInscritos: number = 1250;

  ngOnInit() {
    this.carregarBoletins();
  }

  carregarBoletins() {
    // Dados mockados seguindo o mesmo padrão do template
    this.boletins = [
      {
        id: 1,
        titulo: 'Mercado Agrícola e Previsões Climáticas - Edição 245',
        resumo: 'Análise completa do mercado de grãos, cotações atualizadas e previsão climática para as próximas semanas.',
        numeroEdicao: '245',
        dataPublicacao: new Date('2024-01-20'),
        periodicidade: 'semanal',
        status: 'disponivel',
        imagem: '/assets/boletins/clima.jpg',
        arquivo: '/assets/boletins/boletim-245.pdf',
        downloads: 845,
        indicadores: {
          cotacoes: 15,
          previsoes: 8,
          artigos: 5
        },
        destaques: [
          'Alta nas cotações da soja em 5%',
          'Previsão de chuvas regulares para o Sudeste',
          'Novas técnicas de plantio direto'
        ],
        descricaoCompleta: 'Esta edição do boletim agropecuário traz uma análise detalhada do mercado de grãos, com foco nas cotações da soja, milho e trigo. Inclui também previsões climáticas para as principais regiões produtoras e artigos técnicos sobre manejo sustentável.'
      },
      {
        id: 2,
        titulo: 'Relatório Mensal de Commodities - QM-12',
        resumo: 'Relatório quinzenal com análise de mercado, tendências e oportunidades para o agronegócio.',
        numeroEdicao: 'QM-12',
        dataPublicacao: new Date('2024-01-15'),
        periodicidade: 'quinzenal',
        status: 'disponivel',
        imagem: '/assets/boletins/clima2.jpg',
        arquivo: '/assets/boletins/boletim-qm-12.pdf',
        downloads: 623,
        indicadores: {
          cotacoes: 25,
          previsoes: 12,
          artigos: 8
        },
        destaques: [
          'Perspectivas para o milho segunda safra',
          'Mercado de fertilizantes em alta',
          'Exportações recorde de algodão'
        ],
        descricaoCompleta: 'O relatório quinzenal de commodities apresenta uma visão abrangente do mercado internacional, com análise de tendências, oportunidades de exportação e cenário macroeconômico para o agronegócio brasileiro.'
      },
      {
        id: 3,
        titulo: 'Boletim Técnico - Irrigação e Sustentabilidade',
        resumo: 'Edição especial sobre técnicas modernas de irrigação e gestão sustentável de recursos hídricos.',
        numeroEdicao: 'BT-08',
        dataPublicacao: new Date('2024-01-10'),
        periodicidade: 'mensal',
        status: 'disponivel',
        imagem: '/assets/boletins/irrigacao1.jpg',
        arquivo: '/assets/boletins/boletim-bt-08.pdf',
        downloads: 421,
        indicadores: {
          cotacoes: 8,
          previsoes: 6,
          artigos: 12
        },
        destaques: [
          'Sistemas de irrigação inteligente',
          'Gestão eficiente de água',
          'Casos de sucesso em irrigação'
        ],
        descricaoCompleta: 'Esta edição especial do boletim técnico é dedicada às tecnologias de irrigação e práticas sustentáveis de manejo de recursos hídricos na agricultura.'
      },
      {
        id: 4,
        titulo: 'Próxima Edição - Previsão de Safras 2024',
        resumo: 'Estimativas iniciais para a safra 2024/2025 com base em condições climáticas e mercado.',
        numeroEdicao: '246',
        dataPublicacao: new Date('2024-01-27'),
        periodicidade: 'semanal',
        status: 'proximo',
        imagem: '/assets/boletins/safra.jpeg',
        arquivo: '',
        downloads: 0,
        indicadores: {
          cotacoes: 18,
          previsoes: 10,
          artigos: 6
        },
        destaques: [
          'Primeiras estimativas de safra',
          'Análise de condições climáticas',
          'Perspectivas de mercado'
        ],
        descricaoCompleta: 'A próxima edição trará as primeiras estimativas para a safra 2024/2025, com análise detalhada das condições climáticas e projeções de mercado.'
      }
    ];

    this.boletinsFiltrados = [...this.boletins];
  }

  aplicarFiltros() {
    let filtered = this.boletins.filter(boletim => {
      const matchesSearch = !this.searchTerm ||
        boletim.titulo.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        boletim.resumo.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchesPeriodicidade = this.selectedPeriodicidade === 'all' ||
        boletim.periodicidade === this.selectedPeriodicidade;

      const matchesYear = this.selectedYear === 'all' ||
        boletim.dataPublicacao.getFullYear().toString() === this.selectedYear;

      const matchesStatus = this.selectedStatus === 'all' ||
        boletim.status === this.selectedStatus;

      return matchesSearch && matchesPeriodicidade && matchesYear && matchesStatus;
    });

    // Ordenar
    switch (this.sortBy) {
      case 'recentes':
        filtered.sort((a, b) => b.dataPublicacao.getTime() - a.dataPublicacao.getTime());
        break;
      case 'antigos':
        filtered.sort((a, b) => a.dataPublicacao.getTime() - b.dataPublicacao.getTime());
        break;
      case 'titulo':
        filtered.sort((a, b) => a.titulo.localeCompare(b.titulo));
        break;
      case 'downloads':
        filtered.sort((a, b) => b.downloads - a.downloads);
        break;
    }

    this.boletinsFiltrados = filtered;
  }

  clearFilters() {
    this.searchTerm = '';
    this.selectedPeriodicidade = 'all';
    this.selectedYear = 'all';
    this.selectedStatus = 'all';
    this.sortBy = 'recentes';
    this.aplicarFiltros();
  }

  // Métodos auxiliares
getPeriodicidadeIcon(periodicidade: string): string {
  const icons: { [key: string]: string } = {
    'semanal': 'fas fa-chart-bar',
    'quinzenal': 'fas fa-chart-line',
    'mensal': 'fas fa-chart-area'
  };
  return icons[periodicidade] || 'fas fa-calendar-alt';
}

  getPeriodicidadeLabel(periodicidade: string): string {
    const labels: {[key: string]: string} = {
      'semanal': 'Semanal',
      'quinzenal': 'Quinzenal',
      'mensal': 'Mensal'
    };
    return labels[periodicidade] || 'Periódico';
  }

  getStatusIcon(status: string): string {
  const icons: { [key: string]: string } = {
    'disponivel': 'fas fa-check-circle',
    'proximo': 'fas fa-hourglass-half'
  };
  return icons[status] || 'fas fa-newspaper';
}

  getStatusLabel(status: string): string {
    const labels: {[key: string]: string} = {
      'disponivel': 'Disponível',
      'proximo': 'Próxima Edição'
    };
    return labels[status] || 'Indisponível';
  }

  getDownloadPercentage(boletim: Boletim): number {
    const maxDownloads = Math.max(...this.boletins.map(b => b.downloads));
    return maxDownloads > 0 ? (boletim.downloads / maxDownloads) * 100 : 0;
  }

  // Métodos de estatísticas
  contarInscritos(): number {
    return this.totalInscritos;
  }

  contarPeriodicidades(): number {
    const periodicidades = new Set(this.boletins.map(b => b.periodicidade));
    return periodicidades.size;
  }

  contarDownloads(): number {
    return this.boletins.reduce((total, b) => total + b.downloads, 0);
  }

  // Modal methods
  openBoletimModal(boletim: Boletim) {
    if (boletim.status === 'disponivel') {
      // Abrir o boletim em nova aba
      window.open(boletim.arquivo, '_blank');
    } else {
      // Mostrar informações da próxima edição
      alert(`A edição ${boletim.numeroEdicao} estará disponível em ${boletim.dataPublicacao.toLocaleDateString('pt-BR')}`);
    }
  }

  inscreverBoletim() {
    this.mostrarModalInscricao = true;
  }

  fecharModalInscricao() {
    this.mostrarModalInscricao = false;
  }

  confirmarInscricao(form: NgForm) {
    if (form.valid) {
      const dados: Inscricao = form.value;

      // Simular inscrição
      this.totalInscritos++;
      console.log('Nova inscrição:', dados);

      // Em produção, enviar para API
      alert('Inscrição realizada com sucesso! Você receberá o próximo boletim por email.');

      this.fecharModalInscricao();
      form.reset();
    }
  }

  baixarBoletim(boletim: Boletim) {
    if (boletim.status === 'disponivel') {
      boletim.downloads++;
      const link = document.createElement('a');
      link.href = boletim.arquivo;
      link.download = `boletim-${boletim.numeroEdicao}.pdf`;
      link.click();
    }
  }

  visualizarBoletim(boletim: Boletim) {
    if (boletim.status === 'disponivel') {
      window.open(boletim.arquivo, '_blank');
    }
  }
}

