import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Publicacao {
  id: number;
  titulo: string;
  resumo: string;
  descricaoCompleta: string;
  autor: string;
  dataPublicacao: Date;
  categoria: string;
  tipo: string;
  imagem: string;
  galeria: string[];
  arquivo: string;
  paginas: number;
  downloads: number;
  formato: string;
  tamanho: string;
  idioma: string;
  palavrasChave: string[];
}

@Component({
  selector: 'app-publicacao',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './publicacao.component.html',
  styleUrls: ['./publicacao.component.scss']
})
export class PublicacaoComponent implements OnInit {
  publicacoes: Publicacao[] = [];
  publicacoesFiltradas: Publicacao[] = [];
  selectedPublication: Publicacao | null = null;

  // Filtros
  searchTerm: string = '';
  selectedCategory: string = 'all';
  selectedType: string = 'all';
  selectedYear: string = 'all';
  sortBy: string = 'recentes';

  years: number[] = [2024, 2023, 2022, 2021, 2020];

  ngOnInit() {
    this.carregarPublicacoes();
  }

  carregarPublicacoes() {
    // Dados mockados seguindo o mesmo padrão
    this.publicacoes = [
      {
        id: 1,
        titulo: 'Manejo Integrado de Pragas na Cultura da Soja',
        resumo: 'Guia completo sobre as principais pragas da soja e estratégias de controle integrado.',
        descricaoCompleta: 'Este manual aborda as técnicas mais modernas de manejo integrado de pragas na cultura da soja, incluindo monitoramento, identificação e controle biológico.',
        autor: 'Eng. Agr. João Silva',
        dataPublicacao: new Date('2024-01-15'),
        categoria: 'culturas',
        tipo: 'manual',
        imagem: 'assets/hero/pragas-da-soja.jpg',
        galeria: [],
        arquivo: '/assets/publicacoes/manejo-pragas-soja.pdf',
        paginas: 45,
        downloads: 1247,
        formato: 'PDF',
        tamanho: '4.2 MB',
        idioma: 'Português',
        palavrasChave: ['Soja', 'Pragas', 'Manejo Integrado', 'Controle Biológico']
      },
      {
        id: 2,
        titulo: 'Técnicas de Irrigação por Gotejamento',
        resumo: 'Manual de implementação e manejo de sistemas de irrigação por gotejamento.',
        descricaoCompleta: 'Estudo completo sobre sistemas de irrigação por gotejamento, incluindo dimensionamento, instalação e manutenção.',
        autor: 'Dra. Maria Santos',
        dataPublicacao: new Date('2024-01-10'),
        categoria: 'irrigacao',
        tipo: 'guia',
        imagem: 'assets/hero/Irrigacao-1-1.jpg',
        galeria: [],
        arquivo: '/assets/publicacoes/irrigacao-gotejamento.pdf',
        paginas: 32,
        downloads: 856,
        formato: 'PDF',
        tamanho: '3.1 MB',
        idioma: 'Português',
        palavrasChave: ['Irrigação', 'Gotejamento', 'Água', 'Eficiência']
      }
    ];

    this.publicacoesFiltradas = [...this.publicacoes];
  }

  aplicarFiltros() {
    let filtered = this.publicacoes.filter(publicacao => {
      const matchesSearch = !this.searchTerm ||
        publicacao.titulo.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        publicacao.resumo.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        publicacao.autor.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchesCategory = this.selectedCategory === 'all' ||
        publicacao.categoria === this.selectedCategory;

      const matchesType = this.selectedType === 'all' ||
        publicacao.tipo === this.selectedType;

      const matchesYear = this.selectedYear === 'all' ||
        publicacao.dataPublicacao.getFullYear().toString() === this.selectedYear;

      return matchesSearch && matchesCategory && matchesType && matchesYear;
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

    this.publicacoesFiltradas = filtered;
  }

  clearFilters() {
    this.searchTerm = '';
    this.selectedCategory = 'all';
    this.selectedType = 'all';
    this.selectedYear = 'all';
    this.sortBy = 'recentes';
    this.aplicarFiltros();
  }

  // Métodos auxiliares
 getCategoryIcon(categoria: string): string {
  const icons: { [key: string]: string } = {
    'culturas': '',
    'solo': '',
    'irrigacao': '',
    'defensivos': '',
    'tecnologia': ''
  };
  return icons[categoria] || '';
}

  getCategoryLabel(categoria: string): string {
    const labels: {[key: string]: string} = {
      'culturas': 'Culturas',
      'solo': 'Manejo do Solo',
      'irrigacao': 'Irrigação',
      'defensivos': 'Defensivos',
      'tecnologia': 'Tecnologia'
    };
    return labels[categoria] || 'Geral';
  }

  getTypeIcon(tipo: string): string {
    const icons: {[key: string]: string} = {
      'manual': '',
      'pesquisa': '',
      'guia': '',
      'relatorio': ''
    };
    return icons[tipo] || '';
  }

  getTypeLabel(tipo: string): string {
    const labels: {[key: string]: string} = {
      'manual': 'Manual',
      'pesquisa': 'Pesquisa',
      'guia': 'Guia',
      'relatorio': 'Relatório'
    };
    return labels[tipo] || 'Documento';
  }

  getDownloadPercentage(publicacao: Publicacao): number {
    const maxDownloads = Math.max(...this.publicacoes.map(p => p.downloads));
    return maxDownloads > 0 ? (publicacao.downloads / maxDownloads) * 100 : 0;
  }

  // Métodos de estatísticas
  contarAutores(): number {
    const autores = new Set(this.publicacoes.map(p => p.autor));
    return autores.size;
  }

  contarCategorias(): number {
    const categorias = new Set(this.publicacoes.map(p => p.categoria));
    return categorias.size;
  }

  contarDownloads(): number {
    return this.publicacoes.reduce((total, p) => total + p.downloads, 0);
  }

  // Modal methods
  openPublicationModal(publicacao: Publicacao) {
    this.selectedPublication = publicacao;
  }

  closePublicationModal() {
    this.selectedPublication = null;
  }

  baixarPublicacao(publicacao: Publicacao) {
    publicacao.downloads++;
    const link = document.createElement('a');
    link.href = publicacao.arquivo;
    link.download = publicacao.titulo + '.pdf';
    link.click();
  }

  compartilharPublicacao(publicacao: Publicacao) {
    if (navigator.share) {
      navigator.share({
        title: publicacao.titulo,
        text: publicacao.resumo,
        url: window.location.href + '/publicacao/' + publicacao.id
      });
    } else {
      navigator.clipboard.writeText(window.location.href + '/publicacao/' + publicacao.id);
      alert('Link copiado para a área de transferência!');
    }
  }

  exportarLista() {
    // Implementar exportação da lista
    console.log('Exportar lista de publicações');
  }
}
