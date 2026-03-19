import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-mazozo',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './mazozo.component.html',
  styleUrls: ['./mazozo.component.scss']
})
export class MazozoComponent implements OnInit {

  bookingForm!: FormGroup;
  tourModalOpen = false;
  currentTourLocation = 'reception';

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initBookingForm();
    this.setupTourNavigation();
    this.setupVirtualTour();
  }

  initBookingForm() {
    this.bookingForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      date: ['', [Validators.required]],
      visitors: ['1', [Validators.required]],
      labTour: [false],
      fieldTour: [false],
      researchTalk: [false]
    });
  }

  setupTourNavigation() {
    const tourButtons = document.querySelectorAll('.tour-nav-btn');
    const locationData = {
      reception: {
        title: 'Área de Recepção',
        description: 'Bem-vindo ao Centro de Investigação Agronómica do Mazozo. Esta área serve como ponto de acolhimento para visitantes e investigadores.',
        features: [
          'Área de recepção climatizada',
          'Exposição de projetos em curso',
          'Posto de informação turística',
          'Sala de espera confortável'
        ]
      },
      labs: {
        title: 'Laboratórios de Pesquisa',
        description: 'Conjunto de laboratórios especializados equipados com tecnologia de ponta para pesquisa agronómica avançada.',
        features: [
          '15 laboratórios especializados',
          'Equipamentos de última geração',
          'Áreas de biossegurança nível 2',
          'Sistemas de controlo ambiental'
        ]
      },
      greenhouse: {
        title: 'Complexo de Estufas',
        description: 'Instalações controladas para experimentação vegetal em condições ambientais precisas.',
        features: [
          '10 estufas climatizadas',
          'Sistema de irrigação automatizado',
          'Controlo de temperatura e humidade',
          'Monitorização em tempo real'
        ]
      },
      library: {
        title: 'Biblioteca Científica',
        description: 'Centro de documentação e informação agronómica com vasto acervo especializado.',
        features: [
          'Mais de 20.000 volumes',
          'Acesso a bases de dados internacionais',
          'Salas de estudo individuais e em grupo',
          'Assinatura de revistas científicas'
        ]
      },
      fields: {
        title: 'Campos Experimentais',
        description: 'Áreas externas para testes de campo e validação de tecnologias agrícolas.',
        features: [
          '50 hectares de área experimental',
          'Sistemas de irrigação diversos',
          'Estações meteorológicas',
          'Campos demonstrativos'
        ]
      }
    };

    tourButtons.forEach(button => {
      button.addEventListener('click', () => {
        const location = button.getAttribute('data-location');

        // Update active button
        tourButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Update tour content
        if (location && locationData[location as keyof typeof locationData]) {
          this.updateTourContent(locationData[location as keyof typeof locationData]);
        }
      });
    });
  }

  updateTourContent(data: any) {
    const titleElement = document.getElementById('locationTitle');
    const descElement = document.getElementById('locationDescription');
    const featuresElement = document.getElementById('locationFeatures');

    if (titleElement) titleElement.textContent = data.title;
    if (descElement) descElement.textContent = data.description;

    if (featuresElement) {
      featuresElement.innerHTML = '';
      data.features.forEach((feature: string) => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresElement.appendChild(li);
      });
    }
  }

  setupVirtualTour() {
    // Simulação de controles do tour virtual
    const zoomInBtn = document.getElementById('zoomIn');
    const zoomOutBtn = document.getElementById('zoomOut');
    const fullscreenBtn = document.getElementById('fullscreen');
    const resetBtn = document.getElementById('resetView');

    zoomInBtn?.addEventListener('click', () => {
      console.log('Zoom In');
      // Implementar zoom no tour virtual
    });

    zoomOutBtn?.addEventListener('click', () => {
      console.log('Zoom Out');
      // Implementar zoom out no tour virtual
    });

    fullscreenBtn?.addEventListener('click', () => {
      console.log('Fullscreen');
      // Implementar modo fullscreen
    });

    resetBtn?.addEventListener('click', () => {
      console.log('Reset View');
      // Implementar reset da vista
    });
  }

  startVirtualTour() {
    this.tourModalOpen = true;
    // Em produção, aqui iniciaria o tour virtual 360°
    console.log('Iniciando tour virtual...');
  }

  closeTourModal() {
    this.tourModalOpen = false;
  }

  scrollToExplore() {
    const exploreSection = document.querySelector('.virtual-tour-section');
    if (exploreSection) {
      exploreSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  viewLabDetails(labType: string) {
    // Navegar para página de detalhes do laboratório
    console.log('Visualizando laboratório:', labType);
    // this.router.navigate(['/mazozo/laboratorio', labType]);
  }

  submitBooking() {
    if (this.bookingForm.valid) {
      console.log('Dados do agendamento:', this.bookingForm.value);
      // Aqui iria a lógica para enviar o agendamento
      alert('Solicitação de agendamento enviada com sucesso! Entraremos em contacto em breve.');
      this.bookingForm.reset();
    }
  }
}
