import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footerData = {
    logo: {
      src: 'assets/img/logo/ida.png',
      alt: 'IDA -  Instituto de Desenvolvimento Agrícola',
      text: 'Instituto de Desenvolvimento Agrícola'
    },
    description: 'Promovemos inovação e sustentabilidade na agricultura angolana, conectando produtores, tecnologia e mercado.',
    contact: {
      address: 'Zona Agrícola do Mazozo, Catete- Bengo, Angola',
      email: 'info@ida.gov.ao',
      phone: '+244 923 000 000'
    },
    quickLinks: [
      { name: 'Sobre o IDA', link: '/sobre' },
      { name: 'Programas', link: '/programas' },
      { name: 'Projectos', link: '/projectos' },
      { name: 'Notícias', link: '/noticias' },
      { name: 'Contactos', link: '/contactos' }
    ],
    programs: [
      { name: 'Agricultura Familiar', link: '/programas/agricultura-familiar' },
      { name: 'Extensão Rural', link: '/programas/extensao-rural' },
      { name: 'Segurança Alimentar', link: '/programas/seguranca-alimentar' },
      { name: 'Capacitação', link: '/programas/capacitacao' }
    ],
    recentNews: [
      {
        title: 'IDA Lança Programa de Crédito 2024',
        date: '28 Mai 2024',
        link: '/noticias/programa-credito-2024'
      },
      {
        title: 'Nova Tecnologia de Irrigação',
        date: '25 Mai 2024',
        link: '/noticias/tecnologia-irrigacao'
      }
    ],
    socialMedia: [
  { name: 'Facebook', icon: 'fa-brands fa-facebook-f', link: '#' },
  { name: 'Instagram', icon: 'fa-brands fa-instagram', link: '#' },
  { name: 'LinkedIn', icon: 'fa-brands fa-linkedin-in', link: '#' }
]

  };

  currentYear: number = new Date().getFullYear();

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
