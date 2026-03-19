import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type PartnerType = 'all' | 'government' | 'international' | 'private' | 'academic' | 'community';

interface Partner {
  id: number;
  name: string;
  description: string;
  type: PartnerType;
  logo: string;
  website: string;
  since: string;
  projects: string[];
  focusAreas: string[];
  contact: {
    email: string;
    phone: string;
    address: string;
  };
}

@Component({
  selector: 'app-partners-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent {
  pageData = {
    hero: {
      title: 'Nossos Parceiros',
      subtitle: 'Colaborações estratégicas que fortalecem o desenvolvimento agrário em Angola',
      backgroundImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    stats: {
      title: 'Rede de Parcerias',
      items: [
        { number: '50+', label: 'Parceiros Activos' },
        { number: '15', label: 'Países Representados' },
        { number: '500M', label: 'Investimento Conjunto' },
        { number: '120+', label: 'Projectos em Conjunto' }
      ]
    }
  };

  // Filtros e pesquisa
  searchTerm: string = '';
  selectedType: PartnerType = 'all';
  selectedFocus: string = 'all';

  // Parceiros
  partners: Partner[] = [
    {
      id: 1,
      name: 'Ministério da Agricultura e Florestas',
      description: 'Parceiro institucional principal para implementação de políticas agrícolas nacionais.',
      type: 'government',
      logo: '../assets/partners/maf.jpg',
      website: 'https://minagrif.gov.ao',
      since: '2010',
      projects: ['Programa Nacional de Irrigação', 'Agricultura Familiar'],
      focusAreas: ['Políticas Públicas', 'Financiamento', 'Extensão Rural'],
      contact: {
        email: 'parcerias@minagrif.gov.ao',
        phone: '+244 222 123 456',
        address: 'Luanda, Angola'
      }
    },
    {
      id: 2,
      name: 'Organização das Nações Unidas para Agricultura e Alimentação (FAO)',
      description: 'Agência especializada da ONU que lidera esforços internacionais para derrotar a fome.',
      type: 'international',
      logo: '../assets/partners/fao.png',
      website: 'https://fao.org',
      since: '2015',
      projects: ['Segurança Alimentar', 'Resiliência Climática'],
      focusAreas: ['Segurança Alimentar', 'Sustentabilidade', 'Capacitação'],
      contact: {
        email: 'fao-angola@fao.org',
        phone: '+244 222 987 654',
        address: 'Luanda, Angola'
      }
    },
    {
      id: 3,
      name: 'Banco de Desenvolvimento de Angola',
      description: 'Instituição financeira pública focada no financiamento de projectos de desenvolvimento.',
      type: 'government',
      logo: '../assets/partners/bda.jpg',
      website: 'https://bda.ao',
      since: '2012',
      projects: ['Crédito Agrícola', 'Infraestruturas Rurais'],
      focusAreas: ['Financiamento', 'Investimento', 'Crédito'],
      contact: {
        email: 'agricultura@bda.ao',
        phone: '+244 222 555 888',
        address: 'Luanda, Angola'
      }
    },
    {
      id: 4,
      name: 'Universidade Agostinho Neto',
      description: 'Principal instituição de ensino superior em Angola com forte componente de pesquisa agrícola.',
      type: 'academic',
      logo: '../assets/partners/uan.jpg',
      website: 'https://uan.ao',
      since: '2018',
      projects: ['Pesquisa Agrícola', 'Capacitação Técnica'],
      focusAreas: ['Pesquisa', 'Formação', 'Inovação'],
      contact: {
        email: 'faculdade.agronomia@uan.ao',
        phone: '+244 222 333 444',
        address: 'Luanda, Angola'
      }
    },
    {
      id: 5,
      name: 'AgroBusiness Angola',
      description: 'Empresa privada líder em distribuição de insumos agrícolas e tecnologia.',
      type: 'private',
      logo: '../assets/partners/transferir.png',
      website: 'https://agrobusiness.ao',
      since: '2020',
      projects: ['Tecnologia Agrícola', 'Distribuição de Insumos'],
      focusAreas: ['Tecnologia', 'Insumos', 'Comercialização'],
      contact: {
        email: 'parcerias@agrobusiness.ao',
        phone: '+244 923 123 456',
        address: 'Luanda, Angola'
      }
    },
    {
      id: 6,
      name: 'Associação dos Camponeses de Angola',
      description: 'Organização da sociedade civil que representa os interesses dos agricultores familiares.',
      type: 'community',
      logo: '../assets/partners/parceiro01.jpg',
      website: 'https://aca.org.ao',
      since: '2014',
      projects: ['Agricultura Familiar', 'Comercialização'],
      focusAreas: ['Agricultura Familiar', 'Associativismo', 'Mercados'],
      contact: {
        email: 'info@aca.org.ao',
        phone: '+244 912 987 654',
        address: 'Huambo, Angola'
      }
    }
  ];

  // Tipos de parceiros
  partnerTypes = [
    { value: 'all', label: 'Todos os Tipos' },
    { value: 'government', label: 'Governamental' },
    { value: 'international', label: 'Internacional' },
    { value: 'private', label: 'Privado' },
    { value: 'academic', label: 'Académico' },
    { value: 'community', label: 'Comunitário' }
  ];

  // Áreas de foco
  focusAreas = [
    { value: 'all', label: 'Todas as Áreas' },
    { value: 'Políticas Públicas', label: 'Políticas Públicas' },
    { value: 'Financiamento', label: 'Financiamento' },
    { value: 'Tecnologia', label: 'Tecnologia' },
    { value: 'Pesquisa', label: 'Pesquisa' },
    { value: 'Capacitação', label: 'Capacitação' },
    { value: 'Sustentabilidade', label: 'Sustentabilidade' }
  ];

  selectedPartner: Partner | null = null;

  get filteredPartners() {
    let filtered = this.partners;

    // Filtro por pesquisa
    if (this.searchTerm) {
      filtered = filtered.filter(partner =>
        partner.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        partner.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        partner.focusAreas.some(area => area.toLowerCase().includes(this.searchTerm.toLowerCase()))
      );
    }

    // Filtro por tipo
    if (this.selectedType !== 'all') {
      filtered = filtered.filter(partner => partner.type === this.selectedType);
    }

    // Filtro por área de foco
    if (this.selectedFocus !== 'all') {
      filtered = filtered.filter(partner =>
        partner.focusAreas.includes(this.selectedFocus)
      );
    }

    return filtered;
  }

  openPartnerModal(partner: Partner) {
    this.selectedPartner = partner;
  }

  closePartnerModal() {
    this.selectedPartner = null;
  }

  clearFilters() {
    this.searchTerm = '';
    this.selectedType = 'all';
    this.selectedFocus = 'all';
  }

  getPartnerTypeInfo(type: PartnerType) {
    const typeMap = {
      'government': { label: 'Governamental', color: 'blue', icon: 'fas fa-university' },
      'international': { label: 'Internacional', color: 'green', icon: 'fas fa-globe' },
      'private': { label: 'Privado', color: 'purple', icon: 'fas fa-briefcase' },
      'academic': { label: 'Académico', color: 'orange', icon: 'fas fa-graduation-cap' },
      'community': { label: 'Comunitário', color: 'teal', icon: 'fas fa-users' },
      'all': { label: 'Todos', color: 'gray', icon: 'fas fa-building' }
    };
    return typeMap[type];
  }
}
